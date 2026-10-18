import TechCard from "./TechCard"
import technologies from "../data/technologies.json"
import { useEffect, useState } from "react"
import type { Technology } from "../interface/technology"

function TechStack() {
    const [technology, setTechnologies] = useState<Technology[]>([])
    const [selectedTechs, setSelectedTechs] = useState<Technology[]>([])

    useEffect(() => {
        setTechnologies(technologies)
    }, [])

    function handleAddToStack(id: string) {
        setSelectedTechs(prev => {
            const selectedTech: Technology[] = technology.filter(e => e.id === id)
            return (
                [...prev, ...selectedTech]
            )
        })
    }
    function removeAll(){
        setSelectedTechs([])
    }
    function handleCrossClick(id:string){
        setSelectedTechs(prev=>{
            const selectedTech: Technology[] = prev.filter((e)=>e.id!=id)
            return(
                selectedTech
            )
        })
    }

    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
            <div className="mb-8">
                <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                    Explore the{" "}
                    <span className="bg-gradient-to-r from-rose-500 to-purple-600 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="mt-2 text-base text-gray-600">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {technology.map((e) => {
                        return (
                            <TechCard
                                key={e.id}
                                id={e.id}
                                name={e.name}
                                category={e.category}
                                description={e.description}
                                icon={e.icon}
                                rating={e.rating}
                                difficulty={e.difficulty}
                                badge={e.badge}
                                addToStack={handleAddToStack}
                                isSelected={
                                    selectedTechs.some((elem)=>elem.id===e.id)
                                }
                            />
                        )
                    })}
                </div>

                <aside className="w-full lg:w-80 shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-xs lg:sticky lg:top-6">
                    <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>
                    <p className="text-sm text-gray-400 mt-1 mb-6">
                        {selectedTechs.length === 0
                            ? "No technologies selected yet."
                            : `${selectedTechs.length} Technology Selected`}
                    </p>

                    {selectedTechs.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-gray-200 py-10 text-center">
                            <p className="text-sm text-gray-400">Your stack is empty.</p>
                        </div>
                        ) : 
                        (
                        <div className="space-y-3">
                            {selectedTechs.map((tech, index) => {
                                return (
                                    <div
                                        key={`${tech.id}-${index}`}
                                        className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-3 shadow-xs"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="h-7 w-7 object-contain"
                                            />
                                            <div>
                                                <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                                                    {tech.name}
                                                </h4>
                                                <span className="text-xs text-gray-400 capitalize">
                                                    {tech.category}
                                                </span>
                                            </div>
                                        </div>
                                        <button
                                            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                            onClick={()=>handleCrossClick(tech.id)}
                                        >
                                            <svg
                                                className="h-4 w-4"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )
                            })}

                            <button
                                className="mt-6 w-full rounded-xl border border-rose-300 py-2.5 text-center text-sm font-semibold text-rose-500 hover:bg-rose-50 transition-colors"
                                onClick={()=>{removeAll()}}
                            >
                                Remove All
                            </button>
                        </div>
                    )}
                </aside>
            </div>
        </section>
    )
}

export default TechStack