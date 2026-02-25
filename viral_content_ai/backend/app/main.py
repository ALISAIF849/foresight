from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import shutil
import os

from services.transcription_service import generate_transcript
from services.content_generation_service import generate_content
from services.clip_service import extract_best_frame
from services.thumbnail_renderer import create_thumbnail


app = FastAPI()

# =====================================
# CORS CONFIG
# =====================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =====================================
# ✅ FIXED STORAGE PATH
# =====================================

# current file -> backend/app/main.py
CURRENT_DIR = os.path.abspath(os.path.dirname(__file__))

# move one level up -> backend/
BACKEND_DIR = os.path.abspath(os.path.join(CURRENT_DIR, ".."))

# correct storage location
STORAGE_DIR = os.path.join(BACKEND_DIR, "storage")
VIDEO_DIR = os.path.join(STORAGE_DIR, "videos")

os.makedirs(VIDEO_DIR, exist_ok=True)

print("✅ SERVING STORAGE FROM:", STORAGE_DIR)

# Static serving
app.mount("/storage", StaticFiles(directory=STORAGE_DIR), name="storage")


# =====================================
# WINDOWS → WEB PATH CONVERTER
# =====================================
def to_web_path(full_path: str) -> str:
    relative = full_path.split("storage")[-1]
    return f"storage{relative}".replace("\\", "/")


# =====================================
# MAIN API
# =====================================
@app.post("/process-video")
async def process_video(
    video: UploadFile = File(...),
    niche: str = Form(...)
):

    # -----------------------------
    # SAVE VIDEO
    # -----------------------------
    video_path = os.path.join(VIDEO_DIR, video.filename)

    with open(video_path, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    print(f"✅ Video saved: {video_path}")

    # -----------------------------
    # EXTRACT VIRAL FRAME
    # -----------------------------
    frame_path = extract_best_frame(video_path)

    # -----------------------------
    # THUMBNAIL PLAN
    # -----------------------------
    plan = {
        "title_text": "This Changed Everything"
    }

    # -----------------------------
    # CREATE THUMBNAIL
    # -----------------------------
    thumbnail_path = create_thumbnail(
        frame_path,
        plan
    )

    # -----------------------------
    # TRANSCRIPTION
    # -----------------------------
    transcript = generate_transcript(video_path)

    # -----------------------------
    # CONTENT GENERATION
    # -----------------------------
    content = generate_content(transcript, niche)

    # -----------------------------
    # RESPONSE
    # -----------------------------
    return {
        "thumbnail": to_web_path(thumbnail_path),
        "transcript": transcript,
        "hook": content["hook"],
        "caption": content["caption"],
        "cta": content["cta"],
        "hashtags": content["hashtags"]
    }
