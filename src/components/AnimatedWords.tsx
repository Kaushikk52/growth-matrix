import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ['THRIVE', 'SCALE', 'PROGRESS', 'EXPAND']

export const AnimatedWords = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="text-6xl md:text-8xl font-bold leading-tight mb-8 mix-blend-difference">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500"
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

