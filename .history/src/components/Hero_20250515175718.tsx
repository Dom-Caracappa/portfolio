// Hero.tsx
// Mobile-first responsive hero layout with a horizontal shift on larger screens

import { useState } from "react";
import Globe from "./Globe";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Docs-as-Code", href: "/docs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className=" flex-col items-center justify-center w-full bg-slate-600">
      {/* Responsive branding section */}
      <div className="bg-s late-500 p-4 rounded-md mt-8 mb-2 flex flex-col md:flex-row items-center gap-4">
        {/* Globe logo */}
        <div className="w-40 h-40">
          <Globe />
        </div>

        {/* Nameplate */}
        <div className="text-center md:text-left px-4 py-4 rounded-md ">
          <h1 className="ml-6 font-bold text-white text-3xl">Dom Caracappa</h1>
          <p className="mt-6 ml-6 text-2xl text-white">
            The TECH Writer
          </p>
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
