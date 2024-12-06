import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ServiceCard } from "../ServiceCard";
import { AnimatedWords } from "../AnimatedWords";
import { LogoMarquee } from "../LogosMarquee";
import { Stats } from "../Stats";
export default function Home() {
  return (
    <>
 <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url(/glitch-bg.png)] bg-no-repeat bg-cover opacity-50 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <Stats />
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="grid gap-3 text-2xl mb-4">
                <span>LIMITLESS</span>
                <span>DESIGN</span>
                <span>SOLUTIONS</span>
              </h1>
              <div className="flex flex-col space-y-4 mb-8">
                <h2 className="text-6xl md:text-8xl font-bold leading-tight mb-4 mix-blend-difference">
                  WE HELP BRANDS
                </h2>
                <AnimatedWords />
              </div>
              <button className="bg-purple-700 px-4 py-2 rounded-lg group flex items-center space-x-2 text-white mix-blend-difference font-semibold">
                <span>REACH OUT</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            We are behind some of the most fast-growing products.
          </h2>
          <LogoMarquee />
        </div>
      </section>

      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: "300", label: "SUCCESS PROJECT" },
              { number: "200", label: "PRODUCT LAUNCHES" },
              { number: "100", label: "STARTUP RAISED" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <span className="text-5xl font-bold">+{stat.number}</span>
                <p className="text-sm text-gray-600 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}  

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
               
               How Our Influencer Marketing Company
                <br />
                Helps Brands?
              </h2>
              
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-gray-600 text-lg">
              Leveraging the talents of professional social media influencers and content creators, our influencer marketing experts collaborate with visionary strategists to develop imaginative, distinctive content that boasts exceptional shareability and engagement.Opt for the best influencer marketing services to elevate your brand's presence!
              </p>  
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2"
              >
                <span>About us</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-l to-purple-100 from-transparent" />
        </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">EXPLORE OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="BRAND IDENTITY CREATION"
              description="Crafting unique and memorable brand identities"
              className="bg-gray-50"
              img="/future-blob1.png"
            />
            <ServiceCard
              title="WEB & MOBILE DESIGN"
              description="Creating intuitive and engaging digital experiences"
              className="bg-purple-300 text-black"
              img="/future-blob2.png"
            />
            <ServiceCard
              title="UX/UI DESIGN"
              description="Designing intuitive and user-friendly interfaces"
              className="bg-gray-50"
              img="/future-blob3.png"
            />
            <ServiceCard
              title="DIGITAL MARKETING"
              description="Driving growth through strategic digital initiatives"
              className="bg-black text-white"
              img="/future-blob4.png"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">WHAT MATTERS THE MOST</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Audience",
                description:
                  "What audience are we targeting? How do we find and attract those target customers accurately, efficiently, and cost-effectively?",
                icon: "🔍",
              },
              {
                title: "Message",
                description:
                  "What messages are we sharing? Does this align with your brand and can effectively capture audiences attention & gain trust?",
                icon: "💡",
              },
              {
                title: "Trust",
                description:
                  "What channels do we utilize and how can we borrow trust from the right influencers? How do we choose a right mix of influencers?",
                icon: "✨",
              },
            ].map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl mb-6">{approach.icon}</div>
                <h3 className="text-xl font-bold mb-4">{approach.title}</h3>
                <p className="text-gray-400">{approach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[url(/blade-1-opacity85.png)] bg-bottom">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-8">
              REACH OUT NOW
            </h2>
            <p className="text-black mb-8 max-w-2xl mx-auto font-medium text-lg">
              LET'S COLLABORATE AND CREATE SOMETHING EXTRAORDINARY. CONTACT US
              TODAY TO DISCUSS YOUR VISION AND DISCOVER SOLUTIONS TAILORED TO
              YOUR NEEDS.
            </p>
            <button className="group inline-flex items-center space-x-2 text-white font-semibold bg-black p-2 rounded-lg">
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
