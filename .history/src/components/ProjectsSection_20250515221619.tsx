// src/components/ProjectsSection.tsx
import React from "react";
import ProjectCard from "./ProjectCard";

type ProjectsSectionProps = {
    previewOnly?: boolean;
};

export default function ProjectsSection({ previewOnly }: ProjectsSectionProps) {
    const projects = [
        {
            title: "Battery Integration SOPs",
            description:
                "Scalable illustrated work instructions for a high-energy storage product.",
            link: "/projects/battery-sop",
            pdf: "/pdfs/battery-sop.pdf",
        },
        {
            title: "Engineer Onboarding Workflows",
            description:
                "Docs system combining Confluence, Jira, and GitHub for rapid team ramp-up.",
            link: "/projects/onboarding-flows",
        },
    ];

    const displayed = previewOnly ? projects.slice(0, 2) : projects;

    return (
        <section className="bg-slate-100 py-20">
            <div className="max-w-6xl mx-auto px-6 text-black">
                <h2 className="text-3xl font-bold mb-10">
                    {previewOnly ? "Featured Projects" : "Projects"}
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {displayed.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                {previewOnly && (
                    <div className="mt-10">
                        <a
                            href="/projects"
                            className="inline-block bg-black text-white font-semibold px-5 py-2 rounded hover:bg-slate-800 transition"
                        >
                            View All Projects →
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
