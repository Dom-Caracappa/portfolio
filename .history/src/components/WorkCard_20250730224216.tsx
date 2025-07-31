// src/components/WorkCard.tsx
import React from "react";

type WorkCardProps = {
    title: string;
    description: string;
    link: string;
    pdf?: string;
    tags: string[];
    date?: string; // Optional
};

const tagStyles: Record<string, { color: string; label?: string }> = {
    pdf: { color: "text-green-500", label: "PDF" },
    docs: { color: "text-purple-500", label: "Docs-as-Code" },
    api: { color: "text-orange-400", label: "API Docs" },
    video: { color: "text-blue-400", label: "Video Training" },
    markdown: { color: "text-yellow-400", label: "Markdown" },
    reStructuredText: { color: "text-pink-400", label: "reStructuredText" },
    "CI/CD": { color: "text-indigo-400", label: "CI/CD" },
    fastapi: { color: "text-teal-400", label: "FastAPI" },
    sphinx: { color: "text-rose-400", label: "Sphinx" },
    manufacturing: { color: "text-lime-400", label: "Manufacturing" },
    hardware: { color: "text-amber-400", label: "Hardware" },
    redocly: { color: "text-cyan-400", label: "Redocly" },
    openapi: { color: "text-sky-400", label: "OpenAPI" },
    "Pi-hole": { color: "text-emerald-600", label: "Pi-hole" },
    "Network Security": { color: "text-red-600", label: "Network Security" },
    "Raspberry Pi": { color: "text-pink-800", label: "Raspberry Pi" }


};

export default function WorkCard({
    title,
    description,
    link,
    pdf,
    tags,
    date,
}: WorkCardProps) {
    return (
        <div className="bg-slate-800 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
                {tags.map((tag) => {
                    const { color, label } = tagStyles[tag] || {
                        color: "text-gray-400",
                        label: tag,
                    };
                    return (
                        <span
                            key={tag}
                            className={`text-xs font-semibold ${color} bg-slate-700 px-2.5 py-0.5 rounded-full`}
                        >
                            #{label || tag}
                        </span>
                    );
                })}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-1">{title}</h3>

            {/* Date */}
            {date && (
                <p className="text-xs text-slate-400 mb-2">
                    {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </p>
            )}

            {/* Description */}
            <p className="text-slate-300 mb-4">{description}</p>

            {/* Links */}
            <div className="flex space-x-4">
                <a href={link} className="text-blue-400 hover:underline">
                    View Details
                </a>
                {pdf && (
                    <a
                        href={pdf}
                        className="text-green-400 hover:underline"
                        download
                    >
                        Download PDF
                    </a>
                )}
            </div>
        </div>
    );
}
