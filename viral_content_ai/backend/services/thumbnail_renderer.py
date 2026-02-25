import os
import uuid
from PIL import Image, ImageDraw, ImageFont, ImageEnhance


# ==============================
# PROJECT PATH SETUP
# ==============================

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
THUMBNAIL_DIR = os.path.join(BASE_DIR, "storage", "thumbnails")

os.makedirs(THUMBNAIL_DIR, exist_ok=True)


# ==============================
# THUMBNAIL CREATION FUNCTION
# ==============================

def create_thumbnail(frame_path: str, plan: dict) -> str:
    """
    Creates sharp viral-style thumbnail (no blur)
    Returns saved thumbnail path
    """

    # ==============================
    # LOAD IMAGE
    # ==============================

    img = Image.open(frame_path).convert("RGB")
    img = img.resize((1280, 720))

    # ==============================
    # IMAGE ENHANCEMENT (VIRAL LOOK)
    # ==============================

    brightness = ImageEnhance.Brightness(img)
    img = brightness.enhance(1.15)

    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(1.35)

    color = ImageEnhance.Color(img)
    img = color.enhance(1.25)

    sharpness = ImageEnhance.Sharpness(img)
    img = sharpness.enhance(1.4)

    draw = ImageDraw.Draw(img)

    # ==============================
    # FONT
    # ==============================

    try:
        font = ImageFont.truetype("arialbd.ttf", 90)
    except:
        font = ImageFont.load_default()

    # ==============================
    # TEXT FROM GROQ PLAN
    # ==============================

    title_text = plan.get("title_text", "Viral Moment")

    text_position = (80, 500)

    # ==============================
    # TEXT SHADOW (DEPTH EFFECT)
    # ==============================

    shadow_offset = 5

    draw.text(
        (text_position[0] + shadow_offset, text_position[1] + shadow_offset),
        title_text,
        font=font,
        fill=(0, 0, 0)
    )

    draw.text(
        text_position,
        title_text,
        font=font,
        fill=(255, 255, 255)
    )

    # ==============================
    # UNIQUE FILE NAME
    # ==============================

    thumbnail_id = str(uuid.uuid4())[:8]

    output_path = os.path.join(
        THUMBNAIL_DIR,
        f"thumbnail_{thumbnail_id}.jpg"
    )

    # ==============================
    # SAVE IMAGE
    # ==============================

    img.save(output_path, "JPEG", quality=95)

    print(f"✅ Thumbnail saved at: {output_path}")

    return output_path