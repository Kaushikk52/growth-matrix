import { motion } from 'framer-motion'

export const GradientStar = () => {
  return (
    <motion.div
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-300 rounded-full blur-lg opacity-50" />
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 w-full h-full"
      >
        <path
          d="M100 0 L130 70 L200 100 L130 130 L100 200 L70 130 L0 100 L70 70 Z"
          className="fill-purple-600"
          style={{ filter: 'url(#glow)' }}
        />
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  )
}

