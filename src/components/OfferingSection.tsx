import { motion } from 'framer-motion'

export const OfferingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#252525] rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-[80px] font-light text-[#E8E5DE] leading-none mb-2">15m</h2>
              <h3 className="text-[56px] text-gray-500 font-light leading-none mb-6">Series A</h3>
              <p className="text-gray-400 max-w-md">
                Our vision is clear, and the opportunity ahead is immense. To achieve the next phase of our growth, we're raising $15 million in Series A funding.
              </p>
            </div>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
              {[
                { percent: '10%', label: 'Marketing' },
                { percent: '20%', label: 'Sales' },
                { percent: '30%', label: 'Product' },
                { percent: '60%', label: 'Engineering' },
              ].map((item, index) => (
                <div key={index} className="text-right">
                  <div className="text-[#E8E5DE] font-light">{item.percent}</div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#252525] rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-[40px] text-[#E8E5DE] font-light leading-tight mb-8">
                Growth mindset
              </h2>
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <h3 className="text-[#E8E5DE] text-xl">Scale Operations to Meet Demand</h3>
                  </div>
                  <p className="text-gray-400 pl-4">
                    Expand our capacity to meet growing demand and streamline delivery for our customers.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <h3 className="text-[#E8E5DE] text-xl">Accelerate Development</h3>
                  </div>
                  <p className="text-gray-400 pl-4">
                    Invest in our technology stack to solidify our foundation and introduce new features.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#252525] rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-[40px] text-[#E8E5DE] font-light leading-tight">
                Fuel
                <br />
                Strategic
                <br />
                Partnerships
              </h2>
            </div>
          </motion.div>

          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#252525] rounded-3xl p-8 relative overflow-hidden"
          >
            <h2 className="text-[40px] text-[#E8E5DE] font-light mb-4">Market Size</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Expand our capacity to meet growing demand and streamline delivery for our customers.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-[64px] text-[#E8E5DE] font-light">$56B</div>
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent" />
                <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                  <div>2022 ESTIMATION</div>
                  <div className="text-[#E8E5DE]">$56.15B</div>
                </div>
              </div>
            </div>
          </motion.div>

         




          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#252525] rounded-3xl p-8 relative overflow-hidden"
          >
            <h2 className="text-3xl text-[#E8E5DE] font-light mb-4">YouTube Influencer Campaigns</h2>
            <p className="text-gray-400 mb-8 max-w-md">
            Engage your audience with high-quality YouTube content. From integrated brand mentions to dedicated videos and YouTube Shorts, we connect you with top-tier creators who bring your brand to life.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-[64px] text-[#E8E5DE] font-light">$56B</div>
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent" />
                <div className="absolute bottom-10 right-2 text-sm text-gray-400">
                  <div>2022 ESTIMATION</div>
                  <div className="text-[#E8E5DE]">$56.15B</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

