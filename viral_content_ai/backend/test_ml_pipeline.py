from services.thumbnail_service import extract_best_frame
from services.transcription_service import generate_transcript
from services.content_generation_service import generate_content

video_path = "E:\\foresight\\viral_content_ai\\sample_video.mp4"
niche = "Motivation and Self-Improvement"

print("Extracting thumbnail...")
thumbnail = extract_best_frame(video_path)
print("Thumbnail saved:", thumbnail)

print("Generating transcript...")
transcript = generate_transcript(video_path)
print("Transcript preview:", transcript[:200])

print("Generating content...")
content = generate_content(transcript, niche)

print("Generated content:")
print(content)