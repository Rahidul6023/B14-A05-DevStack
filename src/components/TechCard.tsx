import type { Technology } from "../interface/technology"
import { useState } from "react";

const badgeStyles: Record<string, string> = {
    Popular: "border-sky-200 bg-sky-50 text-sky-600",
    Versatile: "border-emerald-200 bg-emerald-50 text-emerald-600",
    Fast: "border-orange-200 bg-orange-50 text-orange-600",
    Standard: "border-emerald-200 bg-emerald-50 text-emerald-600",
    "Top SQL": "border-blue-200 bg-blue-50 text-blue-600",
    Cache: "border-rose-200 bg-rose-50 text-rose-600",
    Ubiquitous: "border-amber-200 bg-amber-50 text-amber-600",
    Essential: "border-sky-200 bg-sky-50 text-sky-600",
    Robust: "border-sky-200 bg-sky-50 text-sky-600",
    Modern: "border-teal-200 bg-teal-50 text-teal-600",
    Containers: "border-sky-200 bg-sky-50 text-sky-600",
}

export interface TechCardProps extends Technology {
    addToStack?: (id: string) => void;
    onAddToStack?: (tech: Technology) => void;
    isSelected:boolean;
}

function TechCard({ id,name, category, description, icon, rating, difficulty, badge,isSelected,addToStack}: TechCardProps) {
    return (
        <article className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
            <div>
                <div className="flex items-center justify-between">
                    <img src={icon} alt={name} className="h-8 w-8 object-contain" />
                    {badge && (
                        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeStyles[badge] || "border-sky-200 bg-sky-50 text-sky-600"}`}>
                            {badge}
                        </span>
                    )}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{name}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="mt-6">
                <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                        <span className="rounded-md border border-gray-100 bg-gray-50 px-2.5 py-1 font-medium text-gray-600">
                            {category}
                        </span>
                        <span className="rounded-md border border-gray-100 bg-gray-50 px-2.5 py-1 font-medium text-gray-600">
                            {difficulty}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 font-semibold text-gray-700">
                        <span className="text-amber-400">★</span>
                        <span>{rating}</span>
                    </div>
                </div>

                {isSelected ? (
                    <p className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 py-2.5 text-sm font-semibold text-emerald-600 shadow-xs">
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        Added To Stack
                    </p>
                ) : (
                <button className="mt-4 w-full rounded-lg bg-[#0b0f19] py-2.5 text-sm font-medium text-white hover:bg-gray-800 transition-colors" onClick={()=>addToStack(id)}>
                Add to Stack
                </button>
                )
                }
            </div>
        </article>
    )
}

export default TechCard