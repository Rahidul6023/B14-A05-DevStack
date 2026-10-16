import logoText from "../assets/logo-text.png"

function Header() {
    return (
        <header className="border-b border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
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
        </header>
    )
}

export default Header