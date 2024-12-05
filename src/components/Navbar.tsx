import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-transparent">
        <a className="text-2xl font-bold leading-none text-purple-600" href="/">
          GrowthMatrix
        </a>
        <nav className="hidden md:flex space-x-8">
          <a
            href="#about"
            className="text-sm font-medium hover:text-purple-600"
          >
            ABOUT
          </a>
          <a
            href="#services"
            className="text-sm font-medium hover:text-purple-600"
          >
            SERVICES
          </a>
          <a
            href="#project"
            className="text-sm font-medium hover:text-purple-600"
          >
            PROJECT
          </a>
          <a
            href="#testimony"
            className="text-sm font-medium hover:text-purple-600"
          >
            TESTIMONY
          </a>
        </nav>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          <ArrowUpRight className="w-4 h-4" /> 
          <span className="sr-only">Get Quote</span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 bg-purple-800 bg-opacity-25 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg">
            <div className="flex flex-col p-4">
              <a className="text-sm font-semibold mb-4" href="/">
                HOME
              </a>
              <a className="text-sm font-semibold mb-4" href="/about">
                ABOUT
              </a>
              <a className="text-sm font-semibold mb-4" href="/services">
                SERVICES
              </a>
              <a className="text-sm font-semibold mb-4" href="/contact">
                CONTACT US
              </a>
              <a
                className="py-2 px-6 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition duration-200 text-center"
                href="/contact"
              >
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
