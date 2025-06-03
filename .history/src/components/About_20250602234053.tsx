// src/components/About.tsx

export default function About() {
    return (
        <section id="about" className="max-w-3xl mx-auto px-6 py-10 text-white space-y-6 leading-relaxed">
            <p className="text-2xl">
                About Me
            </p>
            <p>
                Over the past decade, I’ve helped engineering-driven teams, clinical researchers, and innovative startups build robust documentation systems that turn ambiguity into clarity—and scale. My approach combines structured writing, workflow design, and a collaborative spirit that bridges technical expertise with human insight.
            </p>

            <p>
                Before I pivoted to technology, I trained as a political scientist, which might explain my fascination with governance and how documentation shapes power within organizations. Documentation isn’t just a deliverable—it’s a form of operational infrastructure, a system that empowers teams and aligns stakeholders.
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