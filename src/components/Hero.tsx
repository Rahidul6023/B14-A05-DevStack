import heroImg from "../assets/banner-stack.png"

function Hero() {
    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-xl">
                    <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-gray-900 leading-[1.15] mb-6">
                        Build Your Ideal<br />
                        <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                        <button className="rounded-md bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:opacity-95 transition-opacity">
                            Explore Technologies
                        </button>
                        <button className="rounded-md border border-gray-200 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-xs hover:bg-gray-50 hover:border-gray-300 transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="flex justify-center lg:justify-end">
                    <img src={heroImg} alt="Development Stack Illustration" className="w-full max-w-lg lg:max-w-xl object-contain" />
                </div>
            </div>
        </section>
    )
}

export default Hero