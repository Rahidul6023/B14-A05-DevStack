import TechCard from "./TechCard"
import technologies from "../data/technologies.json"
import { useEffect,useState } from "react"
import type { Technology } from "../interface/technology"

function TechStack(){
    const [technology,setTechnologies] = useState<Technology[]>([])
    useEffect(()=>{
        setTechnologies(technologies)
    },[])
    return(
        <section>
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
    )
}

export default TechStack