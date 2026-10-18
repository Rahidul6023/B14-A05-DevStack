import TechCard from "./TechCard"
import technologies from "../data/technologies.json"
import { useEffect,useState } from "react"
import type { Technology } from "../interface/technology"

function TechStack(){
    const [technology,setTechnologies] = useState<Technology[]>([])
    const [selectedTechs,setSelectedTechs] = useState<Technology[]>([])
    useEffect(()=>{
        setTechnologies(technologies)
    },[])
    function handleAddToStack(id: string){
        setSelectedTechs(prev=>{
            const selectedTech:Technology[] = technology.filter(e=>e.id===id)
            return(
                [...prev,...selectedTech]
            )
        })
    }
    return(
        <section>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {technology.map((e)=>{
                    return(
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
                            addToStack = {handleAddToStack}
                        />
                    )
                })}
            </section>
            <section>
                {selectedTechs.map((tech)=>{
                    return(
                        <div>
                            <p>{tech.name}</p>
                        </div>
                    )
                })}
            </section>
        </section>
        
    )
}

export default TechStack