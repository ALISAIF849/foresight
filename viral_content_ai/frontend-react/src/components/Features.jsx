import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="py-32 px-6 bg-white"
    >
      <div className="max-w-[980px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            One platform. Infinite formats.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Auto Clips', desc: 'AI detects viral moments' },
            { title: 'AI Blog', desc: 'Generate written content' },
            { title: 'Multi-Language', desc: 'Translate to any language' },
            { title: 'Hashtag Engine', desc: 'Optimized tags instantly' },
            { title: 'Thumbnail Studio', desc: 'Eye-catching thumbnails' },
            { title: 'Voiceover Mode', desc: 'AI-generated audio' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
