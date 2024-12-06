import { motion } from "framer-motion";
import { ServiceCard } from "../ServiceCard";

export default function Services() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">EXPLORE OUR SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              title="YouTube Influencer Marketing"
              description="Integrated & Dedicated Videos, YouTube Shorts with 5,000+ KOLs"
              className="bg-gray-50"
              // img="future-blob1"
            />
            <ServiceCard
              title="LinkedIn Influencer Marketing"
              description="150+ micro, nano, mega influencers across 10+ content genres"
              className="bg-purple-300 text-black"
              // img="future-blob2"
            />
            <ServiceCard
              title="Twitter Influencer Marketing"
              description="Top Tech and AI Influencers to promote your brand, product, or service"
              className="bg-gray-50"
              // img="future-blob3"
            />
            <ServiceCard
              title="NewsLetter Marketing"
              description="Access to your audience’s inbox, allowing you to share engaging content & drive traffic to your website"
              className="bg-black text-white"
              // img="future-blob4"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4  ">
          <h2 className="text-4xl font-bold mb-16 inset-0 bg-[url(/glitch-bg.png)] bg-no-repeat text-transparent bg-clip-text">
            WHAT MATTERS THE MOST
          </h2>
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
    </>
  );
}
