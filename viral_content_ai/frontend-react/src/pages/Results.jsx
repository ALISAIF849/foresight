import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Results() {
  const navigate = useNavigate()
  const { projectId } = useParams()
  const [selectedPlatform, setSelectedPlatform] = useState('all')

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
              Download All
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
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
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Real-Time Virality Heatmap</h3>
          <div className="grid grid-cols-6 gap-3">
            {[
              { time: '0-10s', score: 92, label: 'Hook', color: 'bg-gray-900' },
              { time: '10-20s', score: 88, label: 'Peak', color: 'bg-gray-800' },
              { time: '20-30s', score: 95, label: 'Viral', color: 'bg-gray-900' },
              { time: '30-40s', score: 78, label: 'Hold', color: 'bg-gray-700' },
              { time: '40-50s', score: 65, label: 'Drop', color: 'bg-gray-600' },
              { time: '50-60s', score: 82, label: 'CTA', color: 'bg-gray-800' },
            ].map((segment, idx) => (
              <div key={idx} className="text-center">
                <div className={`${segment.color} rounded-xl p-6 mb-3 text-white relative overflow-hidden`}>
                  <div className="text-3xl font-bold mb-1">{segment.score}</div>
                  <div className="text-xs opacity-80">{segment.label}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="text-xs text-gray-600 font-medium">{segment.time}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Regional Language Insights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-2xl p-8 mb-12 border border-gray-200"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Regional Language Dominance (India-First)</h3>
          <div className="space-y-4">
            {[
              { lang: 'Hindi', reach: '45%', engagement: '52%', flag: '🇮🇳' },
              { lang: 'English', reach: '30%', engagement: '28%', flag: '🌐' },
              { lang: 'Tamil', reach: '12%', engagement: '15%', flag: '🇮🇳' },
              { lang: 'Telugu', reach: '8%', engagement: '10%', flag: '🇮🇳' },
              { lang: 'Bengali', reach: '5%', engagement: '7%', flag: '🇮🇳' },
            ].map((lang, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="text-2xl">{lang.flag}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{lang.lang}</span>
                    <div className="flex gap-4 text-sm">
                      <span className="text-gray-600">Reach: <span className="font-semibold text-gray-900">{lang.reach}</span></span>
                      <span className="text-gray-600">Engagement: <span className="font-semibold text-gray-900">{lang.engagement}</span></span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-gray-900 h-full rounded-full" style={{ width: lang.reach }} />
                    </div>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-gray-700 h-full rounded-full" style={{ width: lang.engagement }} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Platform Tabs */}
        <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-4">
          {platforms.map((platform) => (
            <motion.button
              key={platform.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedPlatform(platform.id)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all whitespace-nowrap ${
                selectedPlatform === platform.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className="text-xl">{platform.icon}</span>
              <span>{platform.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                selectedPlatform === platform.id
                  ? 'bg-white/20'
                  : 'bg-gray-100'
              }`}>
                {platform.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Assets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAssets.map((asset, idx) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img 
                  src={asset.thumbnail} 
                  alt={`${asset.platform} ${asset.type}`}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                />
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-sm text-white text-xs font-medium">
                  {asset.duration}
                </div>
                {/* Platform Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium flex items-center gap-1">
                  <span>{platforms.find(p => p.id === asset.platform)?.icon}</span>
                  <span className="capitalize">{asset.platform}</span>
                </div>
                {/* Engagement Score Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-gray-900/90 backdrop-blur-sm text-white text-xs font-bold">
                  {asset.engagement}% Engagement
                </div>
                {/* Virality Score Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-bold">
                  🔥 {asset.virality}
                </div>
              </div>

              {/* Asset Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {asset.type}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Optimized for {platforms.find(p => p.id === asset.platform)?.name}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                    ✓ Ready
                  </span>
                </div>

                {/* Platform-Specific Optimizations */}
                <div className="mb-4">
                  <div className="text-xs text-gray-600 mb-2 font-medium">Optimizations:</div>
                  <div className="flex flex-wrap gap-2">
                    {asset.optimizations.map((opt, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 px-4 py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-900 transition">
                    Download
                  </button>
                  <button className="px-4 py-2 rounded-xl border border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition">
                    Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
