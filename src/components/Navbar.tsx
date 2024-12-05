import { X, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
  
    <nav className="relative px-4 py-4 flex justify-between items-center">
    <a className="text-2xl font-bold leading-none " href="/">
      GrowthMatrix
    </a>
    <div className="lg:hidden">
      <button
        className="navbar-burger flex items-center p-3"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
    <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
      <li><a className="text-sm text-purple-600 hover:text-purple-200" href="/">HOME</a></li>
      <li><a className="text-sm text-purple-600 hover:text-purple-200" href="/about">ABOUT</a></li>
      <li><a className="text-sm text-purple-600 hover:text-purple-200" href="/services">SERVICES</a></li>
      <li><a className="text-sm text-purple-600 hover:text-purple-200" href="/contact">CONTACT US</a></li>
    </ul>
    <a
      className="hidden lg:inline-block py-2 px-6 bg-white hover:bg-purple-100 text-purple-600 font-bold rounded-lg transition duration-200"
      href="/contact"
    >
      GET A QUOTE
    </a>
  </nav>

   
   {isMenuOpen && (
    <div className="lg:hidden">
      <div className="fixed inset-0 bg-purple-800 bg-opacity-25 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
      <div className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg">
        <div className="flex flex-col p-4">
          <a className="text-sm font-semibold mb-4" href="/">HOME</a>
          <a className="text-sm font-semibold mb-4" href="/about">ABOUT</a>
          <a className="text-sm font-semibold mb-4" href="/services">SERVICES</a>
          <a className="text-sm font-semibold mb-4" href="/contact">CONTACT US</a>
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
  )
}