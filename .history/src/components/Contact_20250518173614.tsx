// src/components/Contact.tsx

export default function Contact() {
    return (
        <section id="contact" className="max-w-2xl mx-auto px-6 py-20 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-slate-300 mb-8">
                Want to collaborate, hire me, or just say hello? Reach out through the form below —
                I’ll get back to you as soon as possible.
            </p>
            <form
                action="https://formspree.io/f/mayvlvzd"  // ← use your actual form ID
                method="POST"
                className="space-y-6"
            >
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
                    >
                        Send Message
                    </button>
                </form>
        </section>
    );
}
