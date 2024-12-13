import { motion } from "framer-motion";

interface PackageCardProps {
  title: string;
  heading: string[];
  description: string;
  features?: string[];
  className?: string;
  dotColor?: string;
}

const PackageCard = ({
  title,
  heading,
  description,
  features,
  className = "",
  dotColor = "bg-blue-500",
}: PackageCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-3xl p-8 h-full flex flex-col ${className}`}
  >
    <div className="flex items-center gap-2 mb-6">
      <div className={`w-2 h-2 rounded-full ${dotColor}`} />
      <span className="text-sm font-medium font-dmSans">{title}</span>
    </div>

    <div className="flex-1">
      <div className="mb-6">
        {heading.map((line, index) => (
          <h3 key={index} className="text-4xl font-bold leading-tight font-poppins">
            {line}
          </h3>
        ))}
      </div>

      <p className="text-sm mb-6 opacity-80 font-dmSans">{description}</p>

      {features && (
        <div className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="text-sm font-medium">
              {feature}
            </div>
          ))}
        </div>
      )}
    </div>

    <button className="px-6 py-2 rounded-full bg-black/10 text-sm font-medium hover:bg-black/20 transition-colors w-fit">
      View
    </button>
  </motion.div>
);

export const PackagesSection = () => {
  return (
    <section className="py-20 bg-[#1C1C1C]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-poppins"
          >
            WHAT MATTERS THE MOST
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <PackageCard
              title="Message"
              heading={["ALIGN", "YOUR", "BRAND"]}
              description="What messages are we sharing? Does this align with your brand and can effectively capture audiences attention & gain trust?"
              className="bg-white text-black"
              dotColor="bg-blue-500"
            />

            <PackageCard
              title="Audience"
              heading={["MEANINGFUL", "ENGAGEMENT"]}
              description="What audience are we targeting? How do we find and attract those target customers accurately, efficiently, and cost-effectively?"
              features={[
                "STARTING FROM 0?",
                "WANT TO FASTFORWARD?",
                "READY TO BEGIN?",
              ]}
              className="bg-white text-black"
              dotColor="bg-blue-500"
            />

            <PackageCard
              title="Trust"
              heading={["YOUR", "SOCIALS", "SORTED!"]}
              features={[
                " X (Twitter), LinkedIn, Product Hunt",
                "BOOST VISIBILITY",
                "GROW YOUR AUDIENCE",
              ]}
              description="What channels do we utilize and how can we borrow trust from the right influencers? How do we choose a right mix of influencers?"
              className="bg-white text-black"
              dotColor="bg-blue-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
