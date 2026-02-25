import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ProductDemo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="py-32 px-6 bg-gray-50"
    >
      <div className="max-w-[980px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
            One upload.
            <br />
            Every platform.
          </h2>
          <p className="text-xl text-gray-600 font-normal">
            Automatically optimized for each social network
          </p>
        </motion.div>
        
        {/* Platform Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Instagram Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="aspect-[9/16] bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1&mute=1&loop=1&playlist=ysz5S6PUM-U&controls=0&modestbranding=1&showinfo=0"
                title="Instagram Preview"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            </div>
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">Instagram</h3>
              <p className="text-sm text-gray-600">9:16 • 60s</p>
            </div>
          </motion.div>

          {/* YouTube Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1&showinfo=0"
                title="YouTube Preview"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            </div>
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">YouTube</h3>
              <p className="text-sm text-gray-600">16:9 • 45s</p>
            </div>
          </motion.div>

          {/* TikTok Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="aspect-[9/16] bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/jNQXAC9IVRw?autoplay=1&mute=1&loop=1&playlist=jNQXAC9IVRw&controls=0&modestbranding=1&showinfo=0"
                title="TikTok Preview"
                allow="autoplay; encrypted-media"
                frameBorder="0"
              />
            </div>
            <div className="p-4 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-1">TikTok</h3>
              <p className="text-sm text-gray-600">9:16 • 30s</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
