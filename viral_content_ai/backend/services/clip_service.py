import cv2
import os
from services.emotion_service import get_emotion_score


# =====================================
# STORAGE PATH SETUP
# =====================================

BASE_DIR = os.path.dirname(os.path.dirname(__file__))
FRAME_DIR = os.path.join(BASE_DIR, "storage", "frames")

os.makedirs(FRAME_DIR, exist_ok=True)


# =====================================
# BEST FRAME EXTRACTION
# =====================================

def extract_best_frame(video_path: str) -> str:
    """
    Extracts most viral frame using:
    - Emotion detection
    - Sharpness detection
    - Smart frame sampling
    """

    if not os.path.exists(video_path):
        raise FileNotFoundError(f"Video not found: {video_path}")

    cap = cv2.VideoCapture(video_path)

    # Detect FPS automatically
    fps = cap.get(cv2.CAP_PROP_FPS)
    if fps == 0:
        fps = 30

    skip_frames = int(fps)  # analyze ~1 frame/sec

    print(f"✅ Video FPS: {fps}")
    print(f"✅ Sampling every {skip_frames} frames")

    best_score = 0
    best_frame = None
    frame_count = 0

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_count += 1

        # ===============================
        # FRAME SKIPPING (MAJOR OPTIMIZATION)
        # ===============================
        if frame_count % skip_frames != 0:
            continue

        print(f"Processing frame {frame_count}")

        try:
            # Emotion score
            emotion_score = get_emotion_score(frame)

            # Sharpness score
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            sharpness = cv2.Laplacian(gray, cv2.CV_64F).var()

            # Combined viral score
            final_score = emotion_score * sharpness

            if final_score > best_score:
                best_score = final_score
                best_frame = frame

        except Exception as e:
            print("Frame skipped:", e)
            continue

    cap.release()

    if best_frame is None:
        raise Exception("❌ No suitable frame detected")

    # =====================================
    # SAVE FRAME
    # =====================================

    output_path = os.path.join(
        FRAME_DIR,
        "best_frame.jpg"
    )

    cv2.imwrite(output_path, best_frame)

    print("✅ Best emotional frame saved at:", output_path)

    return output_path