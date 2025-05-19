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
      <div className="bg-slate-200 text-center px-4 py-2 rounded-md shadow-md mt-4">
        <h1 className="font-bold text-3xl">Dom Caracappa</h1>
        <p className="text-sm text-slate-600">The TECH Writer</p>
      </div>
    </div>
  );
}
