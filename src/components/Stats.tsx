import { motion } from 'framer-motion'

interface StatProps {
  number: string
  label: string
}

export const Stats = () => {
  const stats: StatProps[] = [
    { number: "300", label: "SUCCESS\nPROJECT" },
    { number: "200", label: "PRODUCT\nLAUNCHES" },
    { number: "100", label: "STARTUP\nRAISED" },
  ]

  return (
    <div className="absolute top-2 right-2 md:right-8">
      <div className="flex flex-wrap justify-end gap-2 md:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="text-right"
          >
            <div className="flex items-start justify-end">
              <span className="text-purple-600 text-2xl md:text-4xl font-bold">+</span>
              <span className="text-4xl md:text-6xl font-bold">{stat.number}</span>
            </div>
            <p className="mt-2 text-xs md:text-sm font-medium whitespace-pre-line tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

