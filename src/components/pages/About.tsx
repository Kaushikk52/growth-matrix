import { ArrowUpRight } from "lucide-react";

export default  function About() {
  return (
    <>
       <section className="bg-white">
        <div className="relative">
          <img
            src="/glitch-bg.png"
            alt="Luxury real estate complex"
            className="w-full h-[300px] object-cover rounded-b-[40px] opacity-60"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white px-8 py-2 rounded-full shadow-lg">
            <h1 className="text-3xl font-semibold">
              Get to Know <span className="text-purple-700">Us</span>
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-16 mb-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-semibold mb-4">
                A little bit about
                <br />
                <span className="text-purple-800">GrowthMatrix</span>
              </h2>
              <button className="group inline-flex items-center space-x-2 text-white font-semibold bg-purple-800 p-2 rounded-lg">
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">
              Inspire. Influence. Achieve.
              </h3>
              <p className="mb-4">
              GrowthMatrix is a growth marketing agency that specialize in delivering iterative and data-driven growth operations for fast-growing companies.
              </p>
              <p className="mb-4">
              Founded in 2024, GrowthMatrix has helped 20+ clients from fast-growing startups, to big tech and top consumer products launch and scale their business.
              </p>
              <p>
                We connect, create and amplify engagement through impactful storytelling campaigns and real conversations. We are the dent makers who can, are and will revolutionize the influencer marketing industry across the world. Be on our side for a transformational journey!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}