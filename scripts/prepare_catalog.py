from pathlib import Path
import json
from PIL import Image, ImageOps


ROOT = Path(__file__).resolve().parents[2]
PUBLIC = Path(__file__).resolve().parents[1] / "public" / "assets" / "catalog"
MANIFEST = Path(__file__).resolve().parents[1] / "app" / "data" / "catalog.json"

CATEGORIES = [
    ("putty-knives", "Putty Knives", ROOT / "油灰刀"),
    ("scrapers", "Scrapers", ROOT / "刮刀"),
    ("plastering-trowels", "Plastering Trowels", ROOT / "抹泥刀"),
    ("bricklaying-trowels", "Bricklaying Trowels", ROOT / "切砖刀"),
]

EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def convert_image(source: Path, destination: Path) -> None:
    with Image.open(source) as image:
        image = ImageOps.exif_transpose(image)
        if image.mode not in ("RGB", "RGBA"):
            image = image.convert("RGBA" if "transparency" in image.info else "RGB")
        image.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
        if image.mode == "RGBA":
            background = Image.new("RGB", image.size, "white")
            background.paste(image, mask=image.getchannel("A"))
            image = background
        image.save(destination, "WEBP", quality=82, method=6)


def main() -> None:
    PUBLIC.mkdir(parents=True, exist_ok=True)
    MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    manifest = []

    for slug, label, source_dir in CATEGORIES:
        destination_dir = PUBLIC / slug
        destination_dir.mkdir(parents=True, exist_ok=True)
        sources = sorted(
            path for path in source_dir.rglob("*")
            if path.is_file() and path.suffix.lower() in EXTENSIONS
        )
        images = []
        for index, source in enumerate(sources, start=1):
            destination = destination_dir / f"{index:03d}.webp"
            convert_image(source, destination)
            images.append(f"/assets/catalog/{slug}/{destination.name}")
        manifest.append({"slug": slug, "label": label, "images": images})
        print(f"{label}: {len(images)}")

    MANIFEST.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Total: {sum(len(category['images']) for category in manifest)}")


if __name__ == "__main__":
    main()
