import { motion } from 'framer-motion'
import { Pen, Linkedin, Edit, User, Share2, Video, Globe, MessageCircle } from 'lucide-react'

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="relative bg-[#1C1C1C] rounded-3xl p-8 group"
  >
    {/* Glow effect */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    {/* Icon */}
    <div className="relative w-12 h-12 mb-6">
      <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg" />
      <div className="relative flex items-center justify-center w-full h-full rounded-full border border-cyan-500 text-cyan-400">
        {icon}
      </div>
    </div>

    {/* Content */}
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
      {description}
    </p>

    {/* Button */}
    <button className="flex items-center gap-2 text-cyan-400 text-sm font-medium group/btn">
      <span>See More</span>
      <div className="w-12 h-[1px] bg-cyan-400 transform origin-left group-hover/btn:scale-x-150 transition-transform" />
    </button>
  </motion.div>
)

export const ServicesSection = () => {
  const services = [
    {
      icon: <Pen className="w-6 h-6" />,
      title: "Designing & Branding",
      description: "Design can be tough, and time is precious. Let us take some of that weight off your shoulders and help you shine!"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Management",
      description: "Stuck on LinkedIn? We'll help you connect the dots! Our management services will help you bulk up your online presence, grow your network, and become a LinkedIn rockstar!"
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: "LinkedIn Ghostwriting",
      description: "Need help finding the right words? Our LinkedIn ghostwriting services will help you share your story & build your personal brand with engaging and informative content."
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "LinkedIn Profile Optimization",
      description: "Get noticed on LinkedIn with our profile optimization services! We'll help you create a strong and effective profile that showcases your best self."
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Social Media Marketing",
      description: "Don't let your social media presence fall behind! Our marketing services will help you build a high-performing online presence, grow your audience, and boost your ROI."
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Editing",
      description: "Say goodbye to amateur video edits! Our service delivers polished, professional results that will impress your audience."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Design & Development",
      description: "Want a website that drives real results? Our web designing & development service converts visitors into clients with high-performing solutions."
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Consultation with Mahnoor",
      description: "Need clarity? Book a call and get personalized advice to tackle your challenges and reach your goals."
    }
  ]

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm text-gray-400"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6"
            >
              WHAT WE ARE OFFERING
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto leading-relaxed"
            >
              At GrowthMatrix, we understand how challenging it can be to manage marketing campaigns while growing your brand. That's why we offer stress-free solutions with tailored influencer marketing strategies. Let us take your brand to new heights while you focus on what matters most
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

