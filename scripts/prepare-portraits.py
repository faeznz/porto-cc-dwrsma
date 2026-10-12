from pathlib import Path
from PIL import Image
from rembg import remove, new_session

root = Path(__file__).resolve().parents[1]
session = new_session("u2netp")
for number in (3, 4, 5):
    source = Image.open(root / "reference" / f"{number}.jpeg").convert("RGB")
    source.thumbnail((1200, 1600))
    result = remove(source, session=session)
    bounds = result.getchannel("A").point(lambda value: 255 if value > 128 else 0).getbbox()
    if bounds:
        result = result.crop(bounds)
    result.save(root / "public" / "images" / f"risma-{number}.webp", quality=90)
    print(f"Prepared portrait {number}: {result.size}")
