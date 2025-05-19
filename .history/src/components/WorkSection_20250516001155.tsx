// src/components/WorkSection.tsx
import React from "react";
import WorkCard from "./WorkCard";

export default function WorkSection() {
    const workItems = [
        {
            title: "Thermal Battery Assembly Docs",
            description: "PDF-based manufacturing documentation for thermal energy storage units.",
            link: "/work/thermal-battery-docs",
            pdf: "/pdfs/thermal-battery-assembly-sop.pdf",
            tag: "pdf" as const,
        },
        {
            title: "OpenTransit API Reference",
            description: "API documentation system built with Redocly and GitHub integration.",
            link: "/work/open-transit-api",
            tag: "api" as const,
        },
        {
            title: "Docs-as-Code Starter Kit",
            description: "Markdown-driven documentation repo with CI and modular content structure.",
            link: "/work/docs-starter-kit",
            tag: "docs" as const,
        },
        {
            title: "Video Training Playbook",
            description: "Operator training series with embedded visuals and interactive checkpoints.",
            link: "/work/video-training",
            tag: "video" as const,
        },
    ];

    return (
        <section className="bg-slate-100 rounded-md py-20">
            <div className="max-w-6xl mx-auto px-6 text-black">
                <h1 className="text-4xl font-bold mb-10">My Work</h1>
                <div className="grid md:grid-cols-2 gap-8">
                    {workItems.map((item, index) => (
                        <WorkCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
