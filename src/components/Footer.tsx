import logoText from "../assets/logo-text.png"

function Footer() {
    return (
        <footer className="border-t border-slate-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="lg:col-span-2">
                        <img src={logoText} alt="DevStack" className="h-7 w-auto" />
                        <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="mt-6 flex items-center gap-4">
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                                GitHub
                            </a>
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                                Twitter
                            </a>
                            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">PRODUCT</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Home</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Technologies</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">COMPANY</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold tracking-wider text-gray-900 uppercase">LEGAL</h3>
                        <ul className="mt-4 space-y-3">
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">© 2026 DevStack. All rights reserved.</p>
                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Privacy</a>
                        <a href="#" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
