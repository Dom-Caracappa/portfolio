// src/components/About.tsx

export default function About() {
    return (
        <section id="about" className="max-w-3xl mx-auto px-6 py-6 text-white space-y-6 leading-relaxed">
            <p className="text-2xl">
                About Me
            </p>
            <p>
                Over the past decade, I’ve helped startups, clinical research, and engineering-driven teams turn ambiguity into action — designing scalable documentation systems, building docs-as-code workflows, and capturing knowledge before it slips through the cracks. My work blends structure and storytelling: from process documentation to onboarding flows, from API references to illustrated work instructions.
            </p>

            <p>
                Before tech, I trained as a political scientist — which might explain my obsession with governance, cross-functional collaboration, and the way documentation shapes power within an organization. I approach writing not just as a deliverable, but as a form of operational infrastructure.

            </p>

            <p>
                Think of it as a rule-based order for organizations.
            </p>

            <p>
                I believe that good documentation:
            </p>
            <ul className="list-disc list-inside text-slate-300">
                <li>Makes systems understandable and safe</li>
                <li>Makes teams faster, calmer, and more resilient</li>
                <li>Makes knowledge <em>durable</em></li>
            </ul>

            <p className="text-slate-400 italic">
                When done right, it outlasts code.
                <br />
                When done wrong, it outpaces trust.
            </p>

            <p className="text-lg">
                Let's do it right together.
            </p>
        </section>
    );
}