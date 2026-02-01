import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full" />
              <span className="text-white">Bodily</span>
            </div>
            <p className="text-gray-400 text-sm">
              Transform your body, elevate your spirit. Holistic wellness for everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-red-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-red-500 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Personal Training
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Group Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Nutrition
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-500 transition-colors">
                  Wellness Coaching
                </a>
              </li>
            </ul>
          </div>

        </div>

{/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/10 text-white placeholder-gray-500 rounded-l text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-r text-sm font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>


        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2026 Bodily. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
