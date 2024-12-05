export default function Home() {
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 to-purple-700">
    {/* Hero Section */}
    <div className="container mx-auto px-4 pt-20 pb-32">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Influencer Marketing:
            <br />
            <span className="text-3xl lg:text-5xl opacity-90">
              The New Word of Mouth.
            </span>
          </h1>
          <p className="text-lg text-purple-100 mb-8">
            GrowthMatrix has helped launch and scale some of the most ambitious and fast growing products.
            Your product is the next one.
          </p>
          <a
            href="/contact"
            className="inline-block py-3 px-8 bg-white hover:bg-purple-100 text-purple-600 font-bold rounded-lg transition duration-200"
          >
            Contact Us
          </a>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/placeholder.svg"
            alt="Marketing Illustration"
            className="w-full max-w-lg mx-auto"
          />
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Why Choose GrowthMatrix?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Strategic Planning",
              description: "Develop comprehensive marketing strategies tailored to your goals"
            },
            {
              title: "Influencer Network",
              description: "Access to a curated network of influential content creators"
            },
            {
              title: "Data-Driven Results",
              description: "Make informed decisions with detailed analytics and reporting"
            },
            {
              title: "Brand Growth",
              description: "Scale your brand presence across multiple platforms"
            },
            {
              title: "ROI Focused",
              description: "Maximize your return on investment with optimized campaigns"
            },
            {
              title: "24/7 Support",
              description: "Dedicated support team to assist you every step of the way"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-purple-50 rounded-lg p-6 hover:shadow-lg transition duration-200"
            >
              <h3 className="text-xl font-bold text-purple-600 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA Section */}
    <div className="bg-purple-800 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Grow Your Brand?
        </h2>
        <p className="text-lg text-purple-200 mb-8 max-w-2xl mx-auto">
          Join the growing list of brands that have transformed their digital presence with GrowthMatrix.
        </p>
        <a
          href="/contact"
          className="inline-block py-3 px-8 bg-white hover:bg-purple-100 text-purple-600 font-bold rounded-lg transition duration-200"
        >
          Get Started Today
        </a>
      </div>
    </div>

   
  </div>
  )
}