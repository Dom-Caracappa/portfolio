// src/components/WorkCard.tsx
import React from "react";

type WorkCardProps = {
    title: string;
    description: string;
    link: string;
    pdf?: string;
    tag: "pdf" | "docs" | "api" | "video";
};

const tagColors = {
    pdf: "text-green-500",
    docs: "text-purple-500",
    api: "text-orange-400",
    video: "text-blue-400",
};

const tagLabels = {
    pdf: "Process Docs",
    docs: "Docs-as-Code",
    api: "API Docs",
    video: "Video Training",
};

export default function WorkCard({ title, description, link, pdf, tag }: WorkCardProps) {
    const tagColor = tagColors[tag];
    const tagLabel = tagLabels[tag];

    return (
        <div className="bg-slate-800 text-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <div className={`text-sm font-semibold uppercase ${tagColor} mb-2`}>
                {tagLabel}
            </div>
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
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
