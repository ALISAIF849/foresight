import os
import json
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))


def generate_thumbnail_plan(transcript, niche):

    prompt = f"""
You are a viral YouTube & Instagram thumbnail designer.

Transcript:
{transcript}

Niche:
{niche}

Create a HIGH-CTR thumbnail design.

Return ONLY JSON:

{{
"title_text": "",
"emotion": "",
"text_position": "left/right/top/bottom",
"color_theme": "",
"background_style": "",
"font_style": "",
"visual_elements": "",
"thumbnail_style": "youtube viral / podcast / cinematic"
}}
"""

    response = client.chat.completions.create(
        model="llama-3.2-11b-vision-preview",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7
    )

    text = response.choices[0].message.content.strip()

    if text.startswith("```"):
        text = text.split("```")[1]

    return json.loads(text)