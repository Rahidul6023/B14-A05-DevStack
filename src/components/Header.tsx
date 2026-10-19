import { useState } from "react"
import logoText from "../assets/logo-text.png"
import hamburgerIcon from "../ui/hamburger.png"

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="border-b border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="hidden md:flex items-center justify-between py-4">
                    <div className="flex items-center">
                        <img src={logoText} alt="DevStack" className="h-7 w-auto" />
                    </div>
                    <nav className="flex items-center gap-8">
                        <button className="text-sm font-medium text-pink-600 transition-colors">Home</button>
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Technologies</button>
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Projects</button>
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">About</button>
                        <button className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Contact</button>
                    </nav>
                    <div className="flex items-center gap-6">
                        <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">Sign In</button>
                        <button className="rounded-full bg-pink-600 px-5 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>

                <div className="flex md:hidden items-center justify-between py-3">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1.5 text-gray-700 hover:text-gray-900 focus:outline-hidden"
                        aria-label="Toggle menu"
                    >
                        <img src={hamburgerIcon} alt="Menu" className="h-5 w-auto" />
                    </button>
                    <div className="flex items-center justify-center">
                        <img src={logoText} alt="DevStack" className="h-6 w-auto" />
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="text-xs sm:text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                            Sign In
                        </button>
                        <button className="rounded-full bg-pink-600 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-sm hover:bg-pink-700 transition-colors">
                            Sign Up
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <nav className="md:hidden border-t border-slate-100 py-3 space-y-1">
                        <button className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-pink-600 hover:bg-pink-50 transition-colors">
                            Home
                        </button>
                        <button className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            Technologies
                        </button>
                        <button className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            Projects
                        </button>
                        <button className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            About
                        </button>
                        <button className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                            Contact
                        </button>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default Header