import { motion } from 'framer-motion'
import { Pen, Linkedin, Edit, User, Share2, Video, Globe, MessageCircle, Instagram, Twitter } from 'lucide-react'

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
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    
    {/* Icon */}
    <div className="relative w-12 h-12 mb-6">
      <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-lg" />
      <div className="relative flex items-center justify-center w-full h-full rounded-full border border-purple-500 text-purple-400">
        {icon}
      </div>
    </div>

    {/* Content */}
    <h3 className="text-2xl font-semibold text-white mb-4">{title}</h3>
    <p className="text-gray-400 mb-6 text-sm leading-relaxed">
      {description}
    </p>

    {/* Button */}
    <button className="flex items-center gap-2 text-purple-400 text-sm font-medium group/btn">
      <span>See More</span>
      <div className="w-12 h-[1px] bg-purple-400 transform origin-left group-hover/btn:scale-x-150 transition-transform" />
    </button>
  </motion.div>
)

export const ServicesSection = () => {
  const services = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "YouTube Influencer Campaigns",
      description: "Engage your audience with high-quality YouTube content. From integrated brand mentions to dedicated videos and YouTube shorts, we connect you with top-tier creators who bring your brand to life."
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Infulencer Partnerships",
      description: "Expand your professional reach with LinkedIn influencers. Our experts collaborate with nano, micro and mega influencers across industries to drive engagement and establish your brand's credibilty."
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: "X Influencer Promotions",
      description: "Make your brand trend on Twitter with powerful influencer collaborations. From AI and Tech to lifestyle niches, we craft campaigns that resonates with the right audience."
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram Influencer Engagements",
      description: "Create stunning campaigns that captivate your audience on Instagram. From product launches to lifestyle promotions, we help you reach millions with authentic influencer partnerships."
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Newsletter Marketing with Influencers",
      description: "Get your brand directly into inboxes with influencer-driven email campaigns. Drive traffic to your website, build trust, and deliver value through engaging newsletters."
    },
    // {
    //   icon: <Video className="w-6 h-6" />,
    //   title: "Video Editing",
    //   description: "Say goodbye to amateur video edits! Our service delivers polished, professional results that will impress your audience."
    // },
    // {
    //   icon: <Globe className="w-6 h-6" />,
    //   title: "Web Design & Development",
    //   description: "Want a website that drives real results? Our web designing & development service converts visitors into clients with high-performing solutions."
    // },
    // {
    //   icon: <MessageCircle className="w-6 h-6" />,
    //   title: "Consultation with Mahnoor",
    //   description: "Need clarity? Book a call and get personalized advice to tackle your challenges and reach your goals."
    // }
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
              className="text-4xl md:text-5xl font-bold text-purple-400 mb-6"
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

