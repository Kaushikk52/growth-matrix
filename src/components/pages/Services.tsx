import { motion } from "framer-motion";
import { ServiceCard } from "../ServiceCard";

export default function Services() {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-7">WHAT WE ARE OFFERING</h2>
          <p className="text-black mb-8 max-w-6xl font-medium text-lg">At GrowthMatrix, we understand how challenging it can be to manage marketing campaigns while growing your brand. That’s why we offer stress-free solutions with tailored influencer marketing strategies. Let us take your brand to new heights while you focus on what matters most!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="YouTube Influencer Campaigns"
              description="Engage your audience with high-quality YouTube content. From integrated brand mentions to dedicated videos and YouTube Shorts, we connect you with top-tier creators who bring your brand to life."
              className="bg-gray-100"
              // img="future-blob1"
            />
            <ServiceCard
              title="LinkedIn Influencer Partnerships"
              description="Expand your professional reach with LinkedIn influencers. Our experts collaborate with nano, micro, and mega influencers across industries to drive engagement and establish your brand’s credibility."
              className="bg-purple-300 text-black"
              // img="future-blob2"
            />
            <ServiceCard
              title="X Influencer Promotions"
              description="Make your brand trend on Twitter with powerful influencer collaborations. From AI and Tech to lifestyle niches, we craft campaigns that resonate with the right audience."
              className="bg-slate-900 text-purple-700"
              // img="future-blob3"
            />
            {/* <ServiceCard
              title="NewsLetter Marketing"
              description="Access to your audience’s inbox, allowing you to share engaging content & drive traffic to your website"
              className="bg-black text-purple-700"
              // img="future-blob4"
            /> */}
             <ServiceCard
              title=" Instagram Influencer Engagements"
              description="Create stunning campaigns that captivate your audience on Instagram. From product launches to lifestyle promotions, we help you reach millions with authentic influencer partnerships."
              className="bg-gray-100 text-black"
              // img="future-blob4"
            />
             <ServiceCard
              title="Newsletter Marketing with Influencers"
              description="Get your brand directly into inboxes with influencer-driven email campaigns. Drive traffic to your website, build trust, and deliver value through engaging newsletters."
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
