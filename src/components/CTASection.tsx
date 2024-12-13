import { motion } from 'framer-motion'

export const CTASection = () => {
  return (
    <section className="bg-[#1C1C1C] py-32">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 font-poppins">
          REACH OUT NOW
          </h2>
          <p className="text-gray-400 text-xl mb-8 font-dmSans">
            Start growing now. Book a call!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-medium hover:from-purple-600 hover:to-purple-700 transition-colors"
          >
            GET IN TOUCH
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

