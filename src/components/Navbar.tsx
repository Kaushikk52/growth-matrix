import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      to={href}
      className="group relative text-base font-medium hover:text-purple-600"
    >
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center bg-transparent">
      <button
            className="text-gray-600 hover:text-gray-800 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        <a className="text-2xl font-bold leading-none text-purple-600" href="/">
          GrowthMatrix
        </a>
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>
        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          <ArrowUpRight className="w-4 h-4" />
          <span className="sr-only">Get Quote</span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <a
                className="text-2xl font-bold leading-none text-purple-600"
                href="/"
              >
                GrowthMatrix
              </a>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-600 hover:text-gray-800"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <Link
                to="/"
                className="block py-2 text-lg font-semibold text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="mt-0"></div>
              <Link
                to="/about"
                className="block py-2 text-lg font-semibold text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block py-2 text-lg font-semibold text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-lg font-semibold text-gray-800 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
