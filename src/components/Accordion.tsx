import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceItem {
  id: string
  number: string
  title: string
  content?: string
  image?: string
}

const services: ServiceItem[] = [
  {
    id: "1",
    number: "01",
    title: "What is Growthmatrix?",
    content: "Growthmatrix is an influencer marketing agency that connects AI and tech brands with top influencers on X (Twitter), LinkedIn, and Product Hunt to amplify their message and boost visibility."
  },
  {
    id: "2",
    number: "02",
    title: "How do you select influencers for a campaign?",
    content: "'We analyse influencers' audience demographics, engagement metrics, and expertise to ensure the perfect fit for your brand and campaign goals.",
  },
  {
    id: "3",
    number: "03",
    title: "Can smaller startups work with Growthmatrix?",
    content: "Yes, we tailor campaigns to fit budgets of all sizes while delivering measurable results."
  },
  {
    id: "4",
    number: "04",
    title: "What industries do you serve?",
    content: "We primarily work with AI, SaaS and other tech-related industries.",
  },
  {
    id: "5",
    number: "05",
    title: "How do you help with Product Hunt launches?",
    content: "We collaborate with Product Hunt influencers to help your product gain visibility and traction, including strategies to generate upvotes and meaningful engagement.",
  },
  {
    id: "6",
    number: "06",
    title: "What’s your turnaround time for campaigns?",
    content: "It varies by campaign size, but most collaborations are set up and running within a week.",
  },
  {
    id: "7",
    number: "07",
    title: "Do you work with global brands and influencers?",
    content: "Yes, our network includes influencers and brands from around the world, enabling us to run campaigns with a global reach",
  },
  {
    id: "8",
    number: "08",
    title: "How do I get started?",
    content: "Reach out via email to discuss your goals and launch a campaign with Growthmatrix.",
  },
]

export const Accordion = () => {
  const [openItem, setOpenItem] = useState<string | null>("1") // Default to second item open

  return (
    <div className="bg-gradient-to-br from-purple-50 to-white p-8 md:p-12 rounded-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently asked questions
          </h2>
          <p className="text-gray-600 max-w-2xl">
          Your questions, answered for you.
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <div key={service.id} className="border-b border-black">
              <button
                onClick={() => setOpenItem(openItem === service.id ? null : service.id)}
                className="w-full py-6 flex items-start justify-between text-left"
              >
                <div className="flex gap-6">
                  <span className="text-sm text-gray-800">{service.number}</span>
                  <div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                <div className="ml-4">
                  {openItem === service.id ? (
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                      <Minus className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full border border-black flex items-center justify-center">
                      <Plus className="w-4 h-4 text-black" />
                    </div>
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openItem === service.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 flex gap-8">
                      <div className="flex-1">
                        <p className="text-gray-900">{service.content}</p>
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

