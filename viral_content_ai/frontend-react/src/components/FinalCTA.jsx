import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section 
      ref={ref}
      className="py-32 px-6 bg-gray-50"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[980px] mx-auto text-center"
      >
        <h2 className="text-5xl md:text-6xl font-semibold mb-12 tracking-tight text-gray-900 leading-tight">
          Content deserves momentum.
        </h2>
        <button 
          onClick={() => window.location.href = '/dashboard'}
          className="px-8 py-3.5 rounded-full bg-black text-white font-medium text-base hover:bg-gray-900 transition-colors"
        >
          Get started
        </button>
      </motion.div>
    </section>
  )
}
