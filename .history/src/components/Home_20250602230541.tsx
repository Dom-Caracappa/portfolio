// src/components/Home.tsx

export default function Home() {
    return (
        <section id="home" className="max-w-3xl mx-auto px-6 py-80 text-white">
            <p className="text-lg font-sans text-slate-400 mb-4">
                <span className="text-5xl float-left leading-none mr-3 font-bold text-white font-sans drop-cap-style">
                    H
                </span>
                i there. I’m <strong>Dom</strong> — a technical writer, documentation systems architect, and full-stack communicator.
            </p>

            <p className="text-slate-300 mb-6">
                I turn complex technical processes into clear, scalable documentation. I specialize in
                <em> docs-as-code</em>, knowledge infrastructure, and cross-functional workflows that empower engineers and delight users.
            </p>

            <div className="mt-6">
                <a href="#work" className="inline-block bg-white text-black font-semibold px-5 py-2 rounded hover:bg-slate-200 transition">
                    View My Work
                </a>
            </div>
        </section>
    );
}