import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const ImpressionCard = ({ count }: { count: string }) => (
  <div className="flex items-center gap-2 text-emerald-600 font-semibold">
    <ArrowUp className="w-4 h-4" />
    <span className="text-2xl">{count} Impressions</span>
  </div>
);

export const ResultsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 relative top-1/3"
            >
              <h2 className="text-5xl md:text-7xl font-bold">
                RESULTS
                <br />
                THAT SPEAK
                <br />
                LOUDER
              </h2>
            </motion.div>
            <div className="space-y-8">
              <div className="flex justify-around">
                <ImpressionCard count="284,993" />
                <ImpressionCard count="122,073" />
              </div>
              <div className="p-4">
                <img
                  src="/insta-section/preview.jpeg"
                  alt="Website Preview"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-6 md:col-span-2">
            {[
              '/insta-section/reactions1.jpeg',
              '/insta-section/views1.jpeg',
              '/insta-section/liked1.jpeg',
              '/insta-section/reactions2.jpeg',
              '/insta-section/views2.jpeg',
              '/insta-section/liked2.jpeg',
            ].map((src, index) => (
              <div key={index} className=" p-2">
                <img
                  src={src}
                  alt={`Metric ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
