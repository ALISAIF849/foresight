import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Results() {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  // =============================
// AI GENERATED RESULT (HARDCODED)
// =============================
const aiResult = {
  thumbnail: "http://127.0.0.1:8000/storage/thumbnails/thumbnail_c7975bff.jpg",

  hook:
    "The Easiest Way to Give Up vs. The Hardest Thing to Do: Show Up",

  caption:
    "Consistency is key to success. Giving 100% every day, even when you don't see immediate results.",

  cta:
    "Take the first step towards your goals today and keep pushing forward. Share with us in the comments what motivates you to get up and grind every day!",

  transcript:
    "It's easy to give up. You know, easy. It's the easiest thing in the world to do. All right, man, I'm done. I ain't gone. I ain't gonna keep going. Yeah, the best I'm gonna work. The one. Yeah, man. It's very easy. But was hard is going, yo, yesterday I got nothing from working as hard as I could. Nothing happened from that. I'm gonna do the same thing again today, but I'm gonna try to go harder. That's the hardest thing in the world. To get up every day and give 100% and be in the same position that you were each day, but mentally know that you're trying and trying and trying. That's, that's a real, that's a real grind.",

  hashtags: [
    "#Motivation",
    "#GrindMode",
    "#ConsistencyIsKey",
    "#SuccessMindset",
    "#DailyMotivation",
    "#StayFocused",
    "#HardWorkPaysOff",
    "#GoalOriented",
    "#MentalToughness",
    "#ProductivityHacks"
  ]
}
  const platforms = [
    { id: 'all', name: 'All Platforms', icon: '🌐', count: 12 },
    { id: 'instagram', name: 'Instagram', icon: '📸', count: 3, color: 'from-pink-500 to-purple-600' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵', count: 3, color: 'from-cyan-500 to-blue-600' },
    { id: 'youtube', name: 'YouTube', icon: '▶️', count: 3, color: 'from-red-500 to-orange-500' },
    { id: 'twitter', name: 'X (Twitter)', icon: '𝕏', count: 3, color: 'from-gray-800 to-gray-600' },
  ]

  const assets = [
    {
      id: 1,
      platform: 'instagram',
      type: 'Reel',
      thumbnail: 'https://via.placeholder.com/400x711/667eea/ffffff?text=Instagram+Reel',
      duration: '60s',
      status: 'ready',
      engagement: 89,
      virality: 92,
      optimizations: ['9:16 Ratio', 'Reels Audio', 'Trending Sound']
    },
    {
      id: 2,
      platform: 'tiktok',
      type: 'Video',
      thumbnail: 'https://via.placeholder.com/400x711/4facfe/ffffff?text=TikTok+Video',
      duration: '30s',
      status: 'ready',
      engagement: 94,
      virality: 96,
      optimizations: ['Vertical', 'Fast Cuts', 'Hook in 3s']
    },
    {
      id: 3,
      platform: 'youtube',
      type: 'Short',
      thumbnail: 'https://via.placeholder.com/400x225/f093fb/ffffff?text=YouTube+Short',
      duration: '45s',
      status: 'ready',
      engagement: 85,
      virality: 88,
      optimizations: ['16:9', 'Thumbnail', 'SEO Tags']
    },
    {
      id: 4,
      platform: 'twitter',
      type: 'Video',
      thumbnail: 'https://via.placeholder.com/400x225/43e97b/ffffff?text=Twitter+Video',
      duration: '2m 20s',
      status: 'ready',
      engagement: 78,
      virality: 81,
      optimizations: ['Square', 'Captions', 'Thread Ready']
    },
    {
      id: 5,
      platform: 'instagram',
      type: 'Story',
      thumbnail: 'https://via.placeholder.com/400x711/fa709a/ffffff?text=Instagram+Story',
      duration: '15s',
      status: 'ready',
      engagement: 91,
      virality: 89,
      optimizations: ['9:16 Ratio', 'Stickers', 'Poll Ready']
    },
    {
      id: 6,
      platform: 'youtube',
      type: 'Thumbnail',
      thumbnail: 'https://via.placeholder.com/400x225/fee140/333333?text=YouTube+Thumbnail',
      duration: '-',
      status: 'ready',
      engagement: 87,
      virality: 90,
      optimizations: ['High CTR', 'Face Focus', 'Text Overlay']
    },
  ]

  const filteredAssets = selectedPlatform === 'all' 
    ? assets 
    : assets.filter(asset => asset.platform === selectedPlatform)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white font-bold text-xl">
              C
            </div>
            <h1 className="text-2xl font-semibold text-gray-900">Casकैड</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate('/dashboard')}
              className="text-gray-600 hover:text-gray-900 transition"
            >
              ← Dashboard
            </button>
            <button className="px-6 py-2 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition">
              
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* ===============================
   AI GENERATED CONTENT (TOP PRIORITY)
================================ */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-white rounded-3xl p-8 mb-12 border border-gray-200 shadow-sm"
>

  <h2 className="text-3xl font-semibold text-gray-900 mb-8">
    🤖 AI Content Intelligence
  </h2>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

    {/* Thumbnail */}
    <div>
      <img
        src={aiResult.thumbnail}
        alt="Generated Thumbnail"
        className="rounded-2xl w-full object-cover border"
      />
    </div>

    {/* Text Content */}
    <div className="space-y-6">

      <div>
        <h4 className="font-semibold text-gray-900 mb-1">🔥 Hook</h4>
        <p className="text-gray-700">{aiResult.hook}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-1">✍️ Caption</h4>
        <p className="text-gray-700">{aiResult.caption}</p>
      </div>

      <div>
        <h4 className="font-semibold text-gray-900 mb-1">📢 Call To Action</h4>
        <p className="text-gray-700">{aiResult.cta}</p>
      </div>

    </div>
  </div>

  {/* Transcript */}
  <div className="mt-8">
    <h4 className="font-semibold text-gray-900 mb-2">
      🧠 Full Transcript
    </h4>

    <div className="bg-gray-50 rounded-xl p-4 max-h-48 overflow-y-auto text-gray-700 text-sm leading-relaxed">
      {aiResult.transcript}
    </div>
  </div>

  {/* Hashtags */}
  <div className="mt-6">
    <h4 className="font-semibold text-gray-900 mb-3">
      #️⃣ Suggested Hashtags
    </h4>

    <div className="flex flex-wrap gap-2">
      {aiResult.hashtags.map((tag, idx) => (
        <span
          key={idx}
          className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>

</motion.div>
        {/* Success Banner with Engagement Prediction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-3xl p-8 mb-12 text-white"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-3xl">
                ✓
              </div>
              <div>
                <h2 className="text-3xl font-semibold mb-2">Processing Complete!</h2>
                <p className="text-gray-300 text-lg">Your content is ready across all platforms</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold mb-1">87%</div>
              <div className="text-gray-400 text-sm">Predicted Engagement</div>
            </div>
          </div>
        </motion.div>

        {/* Virality Heatmap */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-white rounded-2xl p-8 mb-12 border border-gray-200"
>
  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
    Real-Time Virality Heatmap
  </h3>

  <div className="grid grid-cols-6 gap-3">
    {[
      { time: '0-6s', score: 95, label: 'Hook', color: 'bg-gray-900' },

      { time: '6-14s', score: 88, label: 'Relatable', color: 'bg-gray-800' },

      { time: '14-22s', score: 84, label: 'Struggle', color: 'bg-gray-700' },

      { time: '22-30s', score: 91, label: 'Turning Point', color: 'bg-gray-900' },

      { time: '30-37s', score: 93, label: 'Insight', color: 'bg-gray-800' },

      { time: '37-43s', score: 89, label: 'Motivation', color: 'bg-gray-700' },
    ].map((segment, idx) => (
      <div key={idx} className="text-center">

        <div
          className={`${segment.color} rounded-xl p-6 mb-3 text-white relative overflow-hidden`}
        >
          <div className="text-3xl font-bold mb-1">
            {segment.score}
          </div>

          <div className="text-xs opacity-80">
            {segment.label}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="text-xs text-gray-600 font-medium">
          {segment.time}
        </div>

      </div>
    ))}
  </div>
</motion.div>
        {/* AI Dubbing Powered by ElevenLabs */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="bg-white rounded-2xl p-8 mb-12 border border-gray-200"
>

  <div className="flex items-center justify-between mb-6">
    <h3 className="text-2xl font-semibold text-gray-900">
      🌍 AI Video Dubbing
    </h3>

    <span className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium">
      Powered by ElevenLabs 🎙️
    </span>
  </div>

  <p className="text-gray-600 mb-8">
    Your video has been automatically dubbed into multiple global languages
    using AI voice synthesis technology from our sponsor ElevenLabs.
  </p>

  {/* Dubbed Videos */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Hindi Version */}
    <div className="bg-gray-50 rounded-xl p-4">
      <h4 className="font-semibold text-gray-900 mb-3">
        🇮🇳 Hindi Dub
      </h4>

      <video
        controls
        className="rounded-xl w-full"
        src="http://127.0.0.1:8000/storage/dubbed/hindi.mp4"
      />
    </div>

    {/* French Version */}
    <div className="bg-gray-50 rounded-xl p-4">
      <h4 className="font-semibold text-gray-900 mb-3">
        🇫🇷 French Dub
      </h4>

      <video
        controls
        className="rounded-xl w-full"
        src="http://127.0.0.1:8000/storage/dubbed/french.mp4"
      />
    </div>

  </div>

</motion.div>
       
        {/* Additional Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Captions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>✍️</span>
              AI-Generated Captions
            </h3>
            <div className="space-y-3">
              {[
                'Transform your content in minutes with AI 🚀',
                'One upload. Infinite possibilities. ✨',
                'Scale your reach across all platforms 📈',
              ].map((caption, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
                >
                  <p className="text-gray-700">{caption}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hashtags with Trending Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span>#️⃣</span>
              Trend-Aware Hashtags
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                { tag: '#contentcreator', trending: true },
                { tag: '#viral', trending: true },
                { tag: '#socialmedia', trending: false },
                { tag: '#ai', trending: true },
                { tag: '#marketing', trending: false },
                { tag: '#digitalmarketing', trending: false },
                { tag: '#contentmarketing', trending: true },
                { tag: '#socialmediamarketing', trending: false },
                { tag: '#trending', trending: true },
                { tag: '#fyp', trending: true }
              ].map((item, idx) => (
                <span
                  key={idx}
                  className={`px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition cursor-pointer ${
                    item.trending 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {item.trending && '🔥 '}{item.tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
