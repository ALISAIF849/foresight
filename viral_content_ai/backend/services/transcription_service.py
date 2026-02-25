import whisper

# Load once globally (important)
model = whisper.load_model("base")

def generate_transcript(video_path: str) -> str:
    """
    Generates transcript text from video using Whisper.
    """
    result = model.transcribe(video_path)
    return result["text"]