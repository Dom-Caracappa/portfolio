// src/components/WorkSection.tsx
import React from "react";
import WorkCard from "./WorkCard";
import workItems from "../data/workItems.json"

export default function WorkSection() {
    return (
        <section id="work" className="bg-slate-100 rounded-lg py-20">
            <div className="max-w-6xl mx-auto px-6 text-black">
                <h1 className="text-4xl font-bold mb-10">My Work</h1>
                <a className="block text-xl mb-8 mx-auto">Test3 </a>
                <div className="grid md:grid-cols-2 gap-8">
                    {workItems.map((item, index) => (
                        <WorkCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
