# /// script
# requires-python = ">=3.10"
# dependencies = ["pillow", "numpy"]
# ///
"""Quita el fondo blanco de una ilustración doodle sin difuminar los bordes.

A diferencia de remove.bg (segmentación por IA), calcula la transparencia de cada
píxel a partir de su distancia al blanco: la tinta y el verde quedan 100% opacos,
el blanco desaparece y el antialiasing de los bordes se conserva.

Uso:
    uv run design/tools/white-to-alpha.py entrada.png [salida.png] [--lo 12] [--hi 90]
"""

import argparse
from pathlib import Path

import numpy as np
from PIL import Image


def white_to_alpha(img: Image.Image, lo: float, hi: float) -> Image.Image:
    # Si la entrada ya trae transparencia, aplanarla sobre blanco antes de recalcular.
    flat = Image.new("RGBA", img.size, "white")
    flat.alpha_composite(img.convert("RGBA"))
    rgb = np.asarray(flat.convert("RGB"), dtype=np.float32)
    # Distancia al blanco = canal más oscuro. Tinta ~255, verde #57ff8f ~168, blanco ~0.
    dist = 255.0 - rgb.min(axis=2)
    alpha = np.clip((dist - lo) / (hi - lo), 0.0, 1.0)

    # Quitar el halo blanco de los bordes semitransparentes (des-mezclar con blanco).
    a = alpha[..., None]
    safe = np.where(a > 0, a, 1.0)
    color = np.clip((rgb - 255.0 * (1.0 - a)) / safe, 0, 255)

    out = np.dstack([color, alpha * 255.0]).round().astype(np.uint8)
    return Image.fromarray(out, "RGBA")


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("input", type=Path)
    p.add_argument("output", type=Path, nargs="?")
    p.add_argument("--lo", type=float, default=12, help="por debajo: totalmente transparente")
    p.add_argument("--hi", type=float, default=90, help="por encima: totalmente opaco")
    args = p.parse_args()

    out = args.output or args.input.with_name(args.input.stem + "-transparent.png")
    white_to_alpha(Image.open(args.input), args.lo, args.hi).save(out, optimize=True)
    print(out)


if __name__ == "__main__":
    main()
