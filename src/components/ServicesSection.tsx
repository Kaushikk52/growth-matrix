import { motion } from 'framer-motion';
import {Linkedin, Edit,  Instagram, Twitter, Rocket, Users } from 'lucide-react';

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
    <h3 className="text-2xl font-semibold text-white mb-4 font-poppins">{title}</h3>
    <p className="text-gray-400 mb-6 text-sm leading-relaxed font-dmSans">
      {description}
    </p>

    {/* Button */}
    {/* <button className="flex items-center gap-2 text-purple-400 text-sm font-medium group/btn">
      <span>See More</span>
      <div className="w-12 h-[1px] bg-purple-400 transform origin-left group-hover/btn:scale-x-150 transition-transform" />
    </button> */}
  </motion.div>
)

export const ServicesSection = () => {
  const services = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn Infulencer Partnerships",
      description: "Expand your professional reach with LinkedIn influencers. Our experts collaborate with nano, micro and mega influencers across industries to drive engagement and establish your brand's credibilty."
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      title: "X Influencer Promotions",
      description: "Want to go viral on X (formerly Twitter)? We create buzzworthy campaigns with influencers that get people talking whether it’s trending hashtags, creative posts, or meaningful conversations with the right audience."
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      title: "Instagram Influencer  Partnerships",
      description: "Instagram’s the perfect place to show off your brand, especially with AI influencers. We’ll connect you with creators who know how to engage their followers, hype your product, and make your brand stand out. Whether it’s a product launch or something fresh, we’ll help keep your audience hooked."
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Newsletter Marketing with Influencers",
      description: "Be the brand that shows up in inboxes and gets noticed. We’ll help you team up with influencers to create newsletters that drive clicks, build trust, and keep your audience excited to hear from you."
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
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Product Hunt Campaigns",
      description: "Ready to launch on Product Hunt? We’ll help you get your product in front of the right people. From creating an eye-catching post to connecting with early supporters and influencers, we make sure your launch gets the attention it deserves and climbs the charts."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: " LinkedIn and X Engagement Campaigns ",
      description: "Supercharge your LinkedIn and X posts with real engagement. We partner with influencers to boost your content through reposts, quotes, meaningful comments, and authentic interactions—helping your brand reach the right audience and spark conversations that matter"
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
              className="text-base text-gray-400 font-dmSans"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 font-poppins"
            >
              WHAT WE ARE OFFERING
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 max-w-3xl mx-auto leading-relaxed font-dmSans"
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

