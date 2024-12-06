import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ServiceItem {
  id: string
  number: string
  title: string
  description: string
  content?: string
  image?: string
}

const services: ServiceItem[] = [
  {
    id: '1',
    number: '01',
    title: 'Setting Processes, Delegating Tasks',
    description: 'Streamlining Operations for Maximum Efficiency',
    content: 'Detailed content about setting processes and delegating tasks...'
  },
  {
    id: '2',
    number: '02',
    title: 'Dive into Project Management',
    description: 'Navigating the Depths of Project Management: Strategies, Techniques, and Best Practices',
    content: 'Comprehensive project management methodologies and frameworks...',
    image: '/placeholder.svg?height=200&width=300'
  },
  {
    id: '3',
    number: '03',
    title: 'Setting Processes, Delegating Tasks',
    description: 'Optimizing Workflow and Team Productivity',
    content: 'In-depth exploration of process optimization and task delegation...'
  }
]

export const Accordion = () => {
  const [openItem, setOpenItem] = useState<string | null>('1') // Default to second item open

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-12 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services That Add
            <br />
            Significant Business Value
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Our offerings encompass services that serve as startup mentoring or include consulting, contributing to the enhanced value proposition of your business.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border-b border-gray-200">
              <button
                onClick={() => setOpenItem(openItem === service.id ? null : service.id)}
                className="w-full py-6 flex items-start justify-between text-left"
              >
                <div className="flex gap-6">
                  <span className="text-sm text-gray-400">{service.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-gray-600 mt-1">{service.description}</p>
                  </div>
                </div>
                <div className="ml-4">
                  {openItem === service.id ? (
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                      <Minus className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-gray-600" />
                    </div>
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openItem === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 flex gap-8">
                      <div className="flex-1">
                        <p className="text-gray-600">{service.content}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

