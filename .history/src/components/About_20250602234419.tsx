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
                I see documentation as a rule-based order for organizations. Done well, it makes the complex understandable and actionable. Done poorly, it creates confusion and misalignment.
            </p>

            <p>
                I believe that good documentation:
            </p>
            <ul className="list-disc list-inside text-slate-300">
                <li>Makes systems understandable and safe</li>
                <li>Makes teams faster, calmer, and more resilient</li>
                <li>Makes knowledge durable—outlasting even the technology it describes</li>
            </ul>

            <p className="text-slate-400 italic">
                When I work with a team, I bring this philosophy to life: balancing clarity and utility, with an eye on how documentation fuels decision-making and trust.
            </p>

            <p className="text-lg">
                If you’re working on something complex, let’s connect—I’d love to help bridge the gap between vision and reality.
            </p>
        </section>
    );
}