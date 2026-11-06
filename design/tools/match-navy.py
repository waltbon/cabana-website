# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow", "numpy"]
# ///
"""Iguala el fondo de una ilustración dark al navy del sitio (#0f172a).

Los generadores entregan un navy parecido pero no exacto (p. ej. rgb(24,35,57)),
y en un hero bg-section-dark se nota el borde de la imagen. Este script mueve el
fondo al navy exacto sin tocar la tinta clara ni el verde, y opcionalmente
recorta el margen vacío.

No usar white-to-alpha.py en imágenes dark: borra la tinta clara.

Uso:
    uv run design/tools/match-navy.py entrada.jpg salida.webp [--crop] [--pad 90]
"""

import argparse
from pathlib import Path

import numpy as np
from PIL import Image

NAVY = np.array([15, 23, 42], dtype=np.float32)


def match_navy(img: Image.Image, crop: bool, pad: int) -> Image.Image:
    a = np.asarray(img.convert("RGB"), dtype=np.float32)
    corners = np.concatenate(
        [a[:120, :120], a[-120:, -120:], a[:120, -120:], a[-120:, :120]]
    ).reshape(-1, 3)
    bg = np.median(corners, axis=0)

    # Mapea bg -> navy y blanco -> blanco, canal por canal.
    out = NAVY + (a - bg) * (255 - NAVY) / (255 - bg)
    # El ruido del fondo (JPEG) queda en navy exacto; los bordes se suavizan.
    dist = np.abs(out - NAVY).max(axis=2)
    k = np.clip((dist - 6) / 14, 0, 1)[..., None]
    out = np.clip(NAVY * (1 - k) + out * k, 0, 255).round().astype(np.uint8)

    result = Image.fromarray(out)
    if crop:
        ys, xs = np.nonzero(np.abs(out.astype(int) - NAVY).max(axis=2) > 30)
        box = (
            max(xs.min() - pad, 0),
            max(ys.min() - pad, 0),
            min(xs.max() + pad, out.shape[1]),
            min(ys.max() + pad, out.shape[0]),
        )
        result = result.crop(box)
    return result


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("input", type=Path)
    p.add_argument("output", type=Path)
    p.add_argument("--crop", action="store_true", help="recorta el margen vacío")
    p.add_argument("--pad", type=int, default=90, help="margen al recortar (px)")
    args = p.parse_args()

    result = match_navy(Image.open(args.input), args.crop, args.pad)
    result.save(args.output, quality=90, method=6)
    print(args.output, result.size)


if __name__ == "__main__":
    main()
