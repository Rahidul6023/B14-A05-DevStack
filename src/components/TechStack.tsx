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
                        />
                    )
                })}
            </section>
            <section>
                
            </section>
        </section>
        
    )
}

export default TechStack