import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function BentoAddons() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="relative px-6 py-32 overflow-hidden bg-white"
    >
      <div className="max-w-[980px] mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
            Powerful features.
            <br />
            Simple to use.
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            Everything you need to scale your content
          </p>
        </motion.div>

        {/* Features Grid - Clean */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { title: 'Real-time analytics', desc: 'Track performance across all platforms', stats: ['12x Output', '85% Time Saved', '3.2M Reach', '94% Engagement'] },
            { title: 'AI-powered tools', desc: 'Smart automation for every step', features: ['Smart clips', 'AI writing', 'Voiceover'] },
            { title: 'Multi-platform', desc: 'Optimized for all major social networks', platforms: ['Instagram', 'TikTok', 'YouTube', 'Twitter', 'Facebook', 'LinkedIn'] },
            { title: 'Built for creators', desc: 'Join 10,000+ content creators scaling their reach', highlight: true },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 border border-gray-200 ${item.highlight ? 'bg-gray-900 text-white' : 'bg-white'}`}
            >
              <h3 className={`text-2xl font-semibold mb-2 ${item.highlight ? 'text-white' : 'text-gray-900'}`}>
                {item.title}
              </h3>
              <p className={`text-base mb-6 ${item.highlight ? 'text-gray-400' : 'text-gray-600'}`}>
                {item.desc}
              </p>
              
              {item.stats && (
                <div className="grid grid-cols-2 gap-3">
                  {item.stats.map((stat, i) => (
                    <div key={i} className="text-sm text-gray-600">
                      {stat}
                    </div>
                  ))}
                </div>
              )}
              
              {item.features && (
                <div className="space-y-2">
                  {item.features.map((feature, i) => (
                    <div key={i} className="text-sm text-gray-600">
                      • {feature}
                    </div>
                  ))}
                </div>
              )}
              
              {item.platforms && (
                <div className="flex flex-wrap gap-2">
                  {item.platforms.map((platform, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-900 text-xs font-medium">
                      {platform}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
