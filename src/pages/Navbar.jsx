import { useState } from "react"
import { Menu, X } from "lucide-react"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    // <nav className="">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img src="https://marketplace.elorca.com/Assets/Media/elorca-logo.png" alt="eloca" className="w-20 h-20"/>
              {/* <p href="/" className="text-blue-800 font-bold text-xl">
                Elorca Port
              </p> */}
            </div>
          </div>
          {/* <div className="hidden md:block">
            <Button className="bg-sky-600 hover:bg-sky-500 text-white">Get Started</Button>
          </div> */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-sky-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
    // </nav>
  )
}

