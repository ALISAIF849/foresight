import os
import json
from dotenv import load_dotenv
from groq import Groq

load_dotenv()

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def generate_content(transcript: str, niche: str) -> dict:
    prompt = f"""
You are a social media growth expert.

Transcript:
{transcript}

Niche:
{niche}

Generate:
1. Hook
2. Short caption (2 lines max)
3. Call to action
4. 10 Instagram hashtags

Return ONLY valid JSON format:
{{
  "hook": "",
  "caption": "",
  "cta": "",
  "hashtags": []
}}
"""

    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.7,
    )

    text = response.choices[0].message.content.strip()

    # Clean markdown if wrapped
    if text.startswith("```"):
        text = text.split("```")[1]

    return json.loads(text)