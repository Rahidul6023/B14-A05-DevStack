import heroImg from "../assets/banner-stack.png"

function Hero(){
    return(
        <section className="flex px-12 mt-6 justify-between items-center">
            <div className="max-w-xl">
                <p className="text-5xl mb-4">Build Your Ideal Development Stack</p>
                <p className="mb-12">Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.</p>
                <div>
                    <button className="border-1 rounded-md p-4 text-lg">Explore Technologies</button>
                    <button className="border-1 rounded-md p-4 text-lg">Learn More</button>
                </div>
            </div>
            <div>
                <img src={heroImg} alt="Hero Image" />
            </div>
        </section>
    )
}

export default Hero