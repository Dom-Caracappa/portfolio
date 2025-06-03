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
            tags: ["pdf", "manufacturing", "hardware"],
        },
        {
            title: "OpenTransit API Reference",
            description: "API documentation system built with Redocly and GitHub integration.",
            link: "/work/open-transit-api",
            tags: ["api", "redocly", "openapi"],
        },
        {
            title: "Docs-as-Code Starter Kit",
            description: "Markdown-driven documentation repo with CI and modular content structure in MKDocs-Material.",
            link: "https://dom-caracappa.github.io/docs-as-code-starter",
            tags: ["docs", "markdown", "CI/CD"],
        },
        {
            title: "FastAPI Docs Example",
            description: "This project is a test environment to learn API documentation with FastAPI and Sphinx.",
            link: "https://dom-caracappa.github.io/fastapi-docs-starter/",
            tags: ["video", "fastapi", "reStructuredText", "sphinx"],
        },
    ];

    return (
        <section id="work" className="bg-slate-100 rounded-lg py-20">
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
