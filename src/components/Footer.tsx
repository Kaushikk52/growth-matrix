export default function Footer() {
  return (
     <footer className="bg-purple-900 text-white py-12">
     <div className="container mx-auto px-4">
       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         <div>
           <h3 className="text-xl font-bold mb-4">GrowthMatrix</h3>
           <p className="text-purple-200">
             Your partner in digital growth and influencer marketing success.
           </p>
         </div>
         <div>
           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
           <ul className="space-y-2">
             <li><a href="/" className="text-purple-200 hover:text-white">Home</a></li>
             <li><a href="/about" className="text-purple-200 hover:text-white">About</a></li>
             <li><a href="/services" className="text-purple-200 hover:text-white">Services</a></li>
             <li><a href="/contact" className="text-purple-200 hover:text-white">Contact</a></li>
           </ul>
         </div>
         <div>
           <h4 className="text-lg font-semibold mb-4">Services</h4>
           <ul className="space-y-2">
             <li><a href="/services" className="text-purple-200 hover:text-white">Influencer Marketing</a></li>
             <li><a href="/services" className="text-purple-200 hover:text-white">Content Strategy</a></li>
             <li><a href="/services" className="text-purple-200 hover:text-white">Brand Growth</a></li>
             <li><a href="/services" className="text-purple-200 hover:text-white">Analytics</a></li>
           </ul>
         </div>
         <div>
           <h4 className="text-lg font-semibold mb-4">Contact</h4>
           <ul className="space-y-2">
             <li className="text-purple-200">Email: info@growthmatrix.agency</li>
             <li className="text-purple-200">Phone: (555) 123-4567</li>
             <li className="text-purple-200">Location: Your Location</li>
           </ul>
         </div>
       </div>
       <div className="border-t border-purple-800 mt-8 pt-8 text-center text-purple-200">
         <p>&copy; {new Date().getFullYear()} GrowthMatrix. All rights reserved.</p>
       </div>
     </div>
   </footer>
  )
}
