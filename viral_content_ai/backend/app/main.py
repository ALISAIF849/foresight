from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from services.thumbnail_service import extract_best_frame
from services.transcription_service import generate_transcript
from services.content_generation_service import generate_content

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later restrict this
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

os.makedirs("storage/videos", exist_ok=True)

@app.post("/process-video")
async def process_video(
    video: UploadFile = File(...),
    niche: str = Form(...)
):
    video_path = os.path.join("storage/videos", video.filename)

    with open(video_path, "wb") as buffer:
        shutil.copyfileobj(video.file, buffer)

    thumbnail_path = extract_best_frame(video_path)
    transcript = generate_transcript(video_path)
    content = generate_content(transcript, niche)

    return {
        "thumbnail_path": thumbnail_path,
        "transcript": transcript,
        "hook": content["hook"],
        "caption": content["caption"],
        "cta": content["cta"],
        "hashtags": content["hashtags"]
    }