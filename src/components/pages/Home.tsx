import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ServiceCard } from "../ServiceCard";
import { AnimatedWords } from "../AnimatedWords";
export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url(/glitch-bg.png)] bg-no-repeat bg-cover opacity-50 mix-blend-overlay" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="grid gap-3">
                <p className="text-2xl">LIMITLESS</p>

                {/* <br /> */}
                <p className="text-2xl">DESIGN</p>
                {/* <br /> */}
                <p className="text-2xl">SOLUTIONS</p>
              </h1>
              <div className="flex flex-col space-y-4 mb-8">
                <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 mix-blend-difference">
                  WE HELP BRANDS
                </h1>
                <AnimatedWords />
              </div>
              <button className=" bg-purple-700 p-2 rounded-lg group flex items-center space-x-2 text-white mix-blend-difference font-semibold">
                <span>REACH OUT</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
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
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">EXPLORE OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="BRAND IDENTITY CREATION"
              description="Crafting unique and memorable brand identities"
              className="bg-gray-50"
            />
            <ServiceCard
              title="WEB & MOBILE DESIGN"
              description="Creating intuitive and engaging digital experiences"
              className="bg-purple-300 text-black"
            />
            <ServiceCard
              title="UX/UI DESIGN"
              description="Designing intuitive and user-friendly interfaces"
              className="bg-gray-50"
            />
            <ServiceCard
              title="DIGITAL MARKETING"
              description="Driving growth through strategic digital initiatives"
              className="bg-black text-white"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16">OUR EXCELLENT APPROACH</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "DEEP DISCOVERY",
                description:
                  "We begin by immersing ourselves in your brand through thorough research and analysis.",
                icon: "🔍",
              },
              {
                title: "CREATIVE IDEATION",
                description:
                  "Our talented team develops innovative and strategic solutions for your unique needs.",
                icon: "💡",
              },
              {
                title: "TAILORED DESIGN",
                description:
                  "We craft bespoke designs that reflect the unique identity of your brand.",
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

      {/*
        <div className="absolute bottom-[20px] right-[-36px] top-[0.5rem] w-[26rem] h-[55rem] translate-x-12 translate-y-12">
          <div className="absolute inset-0 bg-[url(/blade-1.png)] bg-no-repeat bg-contain bg-bottom-right opacity-50" />
        </div> 
      */}

      <section className="py-20 bg-[url(/blade-1.png)] bg-bottom">
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
