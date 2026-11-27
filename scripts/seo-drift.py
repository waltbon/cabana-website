#!/usr/bin/env python3
"""Drift del plugin claude-seo con Accept-Language según el idioma de la URL (B-056).

El plugin fija `Accept-Language: en-US,en;q=0.5` en `fetch_page.py`. Desde Q21
(`localeDetection: true`) el sitio redirige con 307 a `/en/...` a quien pide
inglés, así que el drift de las páginas en español medía la versión en inglés.

Este script no toca el plugin: carga sus módulos, reemplaza `fetch_page_data`
por una versión que envía el idioma de la URL y llama al `main()` original.

Uso (con el Python del venv de claude-seo):

    $PY scripts/seo-drift.py compare  https://cabanadata.com/lo-que-hacemos --skip-cwv
    $PY scripts/seo-drift.py baseline https://cabanadata.com/en --skip-cwv

El directorio del plugin sale de `$SEO` (como en /seo-weekly) o, si no está,
de la versión más reciente en ~/.claude/plugins/cache/agricidaniel-claude-seo.
"""

import glob
import json
import os
import subprocess
import sys
from urllib.parse import urlparse

LANG_ES = "es-CR,es;q=0.9"
LANG_EN = "en-US,en;q=0.9"


def plugin_scripts_dir() -> str:
    seo = os.environ.get("SEO")
    if not seo:
        found = sorted(
            glob.glob(
                os.path.expanduser(
                    "~/.claude/plugins/cache/agricidaniel-claude-seo/claude-seo/*/"
                )
            )
        )
        if not found:
            sys.exit("seo-drift: no encuentro el plugin claude-seo; define $SEO")
        seo = found[-1]
    scripts = os.path.join(seo, "scripts")
    if not os.path.isfile(os.path.join(scripts, "drift_compare.py")):
        sys.exit(f"seo-drift: {scripts} no tiene drift_compare.py")
    return scripts


def accept_language(url: str) -> str:
    path = urlparse(url).path or "/"
    return LANG_EN if path == "/en" or path.startswith("/en/") else LANG_ES


def main() -> None:
    if len(sys.argv) < 3 or sys.argv[1] not in ("compare", "baseline"):
        sys.exit("uso: seo-drift.py compare|baseline <url> [--skip-cwv] [--baseline-id N]")
    mode, url = sys.argv[1], sys.argv[2]

    scripts = plugin_scripts_dir()
    sys.path.insert(0, scripts)
    import drift_baseline  # noqa: E402
    import drift_compare  # noqa: E402
    import fetch_page  # noqa: E402

    fetch_page.DEFAULT_HEADERS["Accept-Language"] = accept_language(url)
    parse_script = os.path.join(scripts, "parse_html.py")

    def fetch_page_data(page_url: str) -> dict:
        # Igual que drift_baseline.fetch_page_data, pero el fetch corre en este
        # proceso para usar los encabezados ajustados.
        result = {"status_code": None, "html": None, "parsed": None, "error": None}
        page = fetch_page.fetch_page(page_url)
        if page["error"]:
            result["error"] = f"Fetch failed: {page['error']}"
            return result
        if page["redirect_details"]:
            hops = ", ".join(f"{r['status_code']} {r['url']}" for r in page["redirect_details"])
            print(f"seo-drift: {page_url} redirigió ({hops}) -> {page['url']}", file=sys.stderr)
        result["status_code"] = page["status_code"]
        result["html"] = page["content"]
        try:
            proc = subprocess.run(
                [sys.executable, parse_script, "--url", page_url, "--json"],
                input=page["content"],
                capture_output=True,
                text=True,
                timeout=30,
            )
        except subprocess.TimeoutExpired:
            result["error"] = "HTML parsing timed out after 30 seconds"
            return result
        if proc.returncode != 0:
            result["error"] = f"Parse failed: {proc.stderr.strip() or 'Unknown parse error'}"
            return result
        try:
            result["parsed"] = json.loads(proc.stdout)
        except json.JSONDecodeError as e:
            result["error"] = f"Failed to parse JSON output: {e}"
        return result

    drift_baseline.fetch_page_data = fetch_page_data
    drift_compare.fetch_page_data = fetch_page_data

    sys.argv = [f"drift_{mode}.py", url] + sys.argv[3:]
    (drift_compare if mode == "compare" else drift_baseline).main()


if __name__ == "__main__":
    main()
