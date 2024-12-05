import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface ServiceCardProps {
  title: string
  description: string
  className?: string
}

export const ServiceCard = ({ title, description, className = '' }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`group relative overflow-hidden rounded-2xl p-8 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex items-center text-purple-600 font-semibold">
        <span>Learn more</span>
        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </motion.div>
  )
}
