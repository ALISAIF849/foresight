import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative overflow-hidden py-32 px-6 bg-white">
      
      <div className="relative max-w-[980px] mx-auto">
        
        {/* Heading - Apple Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.05]">
            From one video to everywhere
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed">
            Upload once. AI creates platform-optimized content for every social network.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <button 
              onClick={() => navigate('/dashboard')}
              className="px-8 py-3.5 rounded-full bg-black text-white font-medium text-base hover:bg-gray-900 transition-colors"
            >
              Get started
            </button>
          </motion.div>
        </motion.div>

        {/* Video - Clean Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-black">
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1&showinfo=0"
                title="Demo Video"
                allow="autoplay"
                frameBorder="0"
              />
            </div>
          </div>
        </motion.div>

        {/* Features Grid - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: 'Auto clips', desc: 'AI finds the best moments' },
            { title: 'Multi-language', desc: 'Translate to 50+ languages' },
            { title: 'AI captions', desc: 'Perfect subtitles, every time' },
          ].map((feature, idx) => (
            <div key={idx} className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600">
                {feature.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
