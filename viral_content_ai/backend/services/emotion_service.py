from transformers import pipeline
from PIL import Image
import cv2


# Load model once
emotion_classifier = pipeline(
    "image-classification",
    model="trpakov/vit-face-expression"
)


def get_emotion_score(frame):
    """
    Takes OpenCV frame
    Returns emotion confidence score
    """

    # OpenCV BGR → RGB
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Convert to PIL Image ✅ IMPORTANT FIX
    pil_image = Image.fromarray(rgb)

    results = emotion_classifier(pil_image)

    best = max(results, key=lambda x: x["score"])

    return best["score"]