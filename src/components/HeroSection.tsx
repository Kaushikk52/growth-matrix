import { motion } from 'framer-motion'
import { LogoMarquee } from './LogosMarquee'

export const HeroSection = () => {
  // const companies = [
  //   [
  //     { name: 'Shakker', logo: '/logos/shakker.svg' },
  //     { name: 'Notta', logo: '/logos/notta.svg' },
  //     { name: 'Vivago AI', logo: '/logos/vivago.svg' },
  //     { name: 'Dacdora', logo: '/logos/dacdora.svg' },
  //     { name: 'Beta University', logo: '/logos/beta.svg' },
  //   ],
  //   [
  //     { name: 'Affine AI', logo: '/logos/affine.svg' },
  //     { name: 'AdsGency', logo: '/logos/adsgency.svg' },
  //     { name: 'ZP', logo: '/logos/zp.svg' },
  //     { name: 'Quick Creator', logo: '/logos/quick-creator.svg' },
  //   ]
  // ]

  return (
    <section className="py-15 relative overflow-hidden">
      <div className="container mx-auto px-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 font-poppins mt-24">
            We Don't Just Market.
            <br />
            We Influence.
          </h1>
          <p className="text-2xl text-gray-600 mb-5 font-dmSans">
            1 Step Away from Transforming Your Brand's Future.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors">
            Get in touch
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-500 tracking-wider mb-20 font-dmSans">
            We are behind some of the most fast-growing brands.
          </p>

          <LogoMarquee />
          
          {/* <div className="space-y-8">
            {companies.map((row, rowIndex) => (
              <div 
                key={rowIndex}
                className="flex flex-wrap justify-center items-center gap-12 md:gap-16"
              >
                {row.map((company, index) => (
                  <div 
                    key={index}
                    className="w-32 h-12 flex items-center justify-center"
                  >
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}

