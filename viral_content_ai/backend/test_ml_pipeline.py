from services.clip_service import extract_best_frame
from services.thumbnail_renderer import create_thumbnail


video_path = r"E:\foresight\viral_content_ai\sample_video.mp4"

# Step 1: Extract frame
frame_path = extract_best_frame(video_path)

# Step 2: Thumbnail plan
plan = {
    "title_text": "This Changed Everything"
}

# Step 3: Create thumbnail
thumbnail_path = create_thumbnail(
    frame_path,
    plan
)

print("✅ Final Thumbnail:", thumbnail_path)