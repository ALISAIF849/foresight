Viral Content AI

Transform long-form videos into platform-optimized viral content instantly — now with AI-powered multi-language dubbing.

Features

🎬 Auto Clip Detection - AI identifies viral moments automatically

✍️ AI Content Generation - Titles, descriptions, and hashtags created instantly

🌍 AI Multi-Language Dubbing (Powered by ElevenLabs) - Automatically dub your content into multiple languages with natural, human-like voices

🖼️ Thumbnail Studio - Eye-catching thumbnails generated automatically

🎙️ Studio-Quality Voice Synthesis - Realistic AI-generated narration with emotional tone control

#️⃣ Hashtag Engine - Optimized tags for maximum reach

Tech Stack
Frontend

HTML5, CSS3, JavaScript

Tailwind CSS

Netflix-style cinematic UI

Dual theme support (Light/Dark)

Backend

Python FastAPI

AI/ML for content analysis

Video processing pipeline

ElevenLabs Text-to-Speech API integration for multilingual dubbing

Getting Started
Frontend

Simply open frontend/index.html in your browser to see the landing page.

Backend
cd backend
pip install -r requirements.txt

Create a .env file inside the backend folder:

ELEVENLABS_API_KEY=your_api_key_here

Then run:

python main.py
Project Structure
viral_content_ai/
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── api.js
│   │   ├── upload.js
│   │   └── results.js
│   ├── index.html
│   ├── upload.html
│   └── results.html
├── backend/
│   ├── api/
│   ├── services/
│   ├── models/
│   ├── utils/
│   └── main.py
└── README.md
Design Philosophy

This project features a cinematic, Netflix-inspired UI with:

Clean, minimal design

Smooth animations and transitions

Layered depth and atmosphere

Premium feel with intentional micro-interactions

Creator-focused workflow for global content scaling

License

MIT License
