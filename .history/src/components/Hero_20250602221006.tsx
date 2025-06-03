// src/components/Hero.tsx
import { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "My Work", href: "/work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full bg-slate-600">
      {/* Responsive branding section */}
      <div className="bg-slate-500 p-2 rounded-md mt-2 mb-2 flex flex-col md:flex-row items-center gap-4">
        {/* Responsive logos */}
        <div className="text-center md:text-left px-4 py-4 rounded-md">
          {/* Large logo for desktop */}
          <img
            src="/src/assets/logo-lg-white.png"
            alt="Dom Caracappa | TECH WRITER"
            className="hidden md:block w-auto max-w-lg mx-auto md:mx-0"
          />
          {/* Small logo for mobile */}
          <img
            src="/src/assets/logo-sm-white.png"
            alt="Dom Caracappa | TECH WRITER"
            className="block md:hidden w-40 mx-auto"
          />
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-black text-white w-full relative">
        {/* Desktop nav list */}
        <ul className="hidden md:flex justify-center space-x-6 py-2">
          {links.map((link) => (
            <li key={link.name} className="hover:underline">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden flex justify-end px-4 py-2">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            ☰
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {isOpen && (
          <ul className="md:hidden flex flex-col items-center bg-black pb-4">
            {links.map((link) => (
              <li key={link.name} className="py-2 hover:underline">
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
