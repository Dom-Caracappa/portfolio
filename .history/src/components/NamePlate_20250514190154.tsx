// NamePlate.tsx
// This component renders the Globe (logo/visual) and your name/title.
// Minimal styling here — layout is handled by the parent (Hero).

import Globe from "./Globe";

export default function NamePlate() {
  return (
    <div className="flex flex-col items-center">
      {/* Logo visual – make sure Globe.tsx is working correctly */}
      <div className="w-32 h-32">
        <Globe />
      </div>

      {/* Name and subtitle – styled to appear like a badge or nameplate */}
      <div className=" text-center px-6 py-4 rounded-lg shadow-lg mt-6">
        <h1 className="font-bold text-3xl">Dom Caracappa</h1>
        <p className="text-base text-slate-600">The TECH Writer</p>
      </div>
    </div>
  );
}