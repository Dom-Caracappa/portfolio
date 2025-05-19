// src/components/Contact.tsx
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    const [state, handleSubmit] = useForm("xovdbaze"); // <- replace with real ID

    if (state.succeeded) {
        return (
            <section id="contact" className="max-w-2xl mx-auto px-6 py-20 text-white text-center">
                <h2 className="text-3xl font-bold mb-4">Thanks for reaching out!</h2>
                <p className="text-slate-300">I'll get back to you as soon as I can.</p>
            </section>
        );
    }

    return (
        <section id="contact" className="max-w-2xl mx-auto px-6 py-20 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <p className="text-slate-300 mb-8">
                Want to collaborate, hire me, or just say hello? Reach out through the form below —
                I’ll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                        Name
                    </label>
                    <input
                        id="name"
                        type="text"
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
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                </div>

                <button
                    type="submit"
                    disabled={state.submitting}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
                >
                    {state.submitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
}
