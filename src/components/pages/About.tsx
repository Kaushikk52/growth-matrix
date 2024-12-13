import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="bg-white">
        {/* <div className="relative">
          <img
            src="/glitch-bg.png"
            alt="Luxury real estate complex"
            className="w-full h-[300px] object-cover rounded-b-[40px] opacity-60"
          />
        </div> */}

        <div className="container mx-auto px-4 mt-16 mb-12">
          {/* <div className="absolute top-16 left-1/3 bg-white px-8 py-2 rounded-full shadow-lg">
            <h1 className="text-3xl font-semibold">
              Get to Know <span className="text-purple-700">Us</span>
            </h1>
          </div> */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-semibold mb-4 font-poppins">
                Get To Know Us
                <br />
              </h2>
              <button className="group inline-flex items-center space-x-2 text-white font-semibold bg-purple-800 p-2 rounded-lg">
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-4xl font-semibold mb-4">
                About Us
              </h3>
              <p className="mb-4">
                At GrowthMatrix, we’re all about helping brands grow faster and
                smarter. Founded in 2024, we focus on creating simple and
                effective marketing strategies that actually work. Whether
                you’re just starting out or already making waves, we’re here to
                take your brand to the next level.
              </p>
              <h3 className="text-xl font-semibold mb-2">What We Do</h3>
              <p className="mb-4 text-slate-800">
                We mix creativity with data to create campaigns that stand out.
                Here’s how we help:
              </p>
              <p className="mb-4">
                We connect you with the right influencers to grow your reach. We
                design custom campaigns that match your goals. We tell your
                brand’s story in a way that gets people to trust and remember
                you. We’ve already helped over 20 brands, from fresh startups to
                big tech companies, scale their businesses and connect with
                their audience.
              </p>

              <h3 className="text-xl font-semibold mb-2">How We Work</h3>
              <p className="mb-4 text-slate-800">
                We believe in keeping things simple and focused.
              </p>

              <p className="mb-4">
                Telling Your Story: We create campaigns that inspire your
                audience and make an impact. Smart Strategies: We use data to
                guide every decision and get the best results. Real Connections:
                We focus on building trust with your audience by keeping it
                real. Why Work With Us We’re more than just a marketing agency.
                We’re your partner in growth. Here’s why you’ll love working
                with us:
              </p>

              <p className="mb-4">
                Stand Out: We’ll make sure your brand gets noticed in the right
                way. Smart Growth: Our strategies make sure every effort counts
                toward your goals. Build Trust: We help you connect with your
                audience in a genuine way. Our Vision We want to change how
                brands grow by focusing on people first. We believe in creating
                campaigns that feel real, inspire action, and build long-lasting
                connections.
              </p>

              <h3 className="text-xl font-semibold mb-2">Ready to Grow?</h3>

              <p className="mb-4">
                We’re here to help your brand achieve big things. Let’s work
                together to create something that really makes an impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
