// src/components/ProjectCard.tsx
import React from "react";

type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
    pdf?: string;
};

export default function ProjectCard({ title, description, link, pdf }: ProjectCardProps) {
    return (
        <div className="bg-slate-800 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-slate-300 mb-4">{description}</p>
            <div className="flex space-x-4">
                <a href={link} className="text-blue-400 hover:underline">View Details</a>
                {pdf && (
                    <a href={pdf} className="text-green-400 hover:underline" download>
                        Download PDF
                    </a>
                )}
            </div>
        </div>
    );
}
