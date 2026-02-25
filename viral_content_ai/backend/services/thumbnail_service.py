import cv2
import os


def extract_best_frame(video_path: str) -> str:

    output_dir = os.path.join("storage", "frames")
    os.makedirs(output_dir, exist_ok=True)

    output_path = os.path.join(output_dir, "best_frame.jpg")

    cap = cv2.VideoCapture(video_path)

    best_score = 0
    best_frame = None

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        score = cv2.Laplacian(gray, cv2.CV_64F).var()

        if score > best_score:
            best_score = score
            best_frame = frame

    cap.release()

    if best_frame is None:
        raise Exception("No frame extracted")

    cv2.imwrite(output_path, best_frame)

    print("✅ Frame extracted:", output_path)

    return output_path