
// src/components/GlobeAssembly.tsx
import Globe from './Globe';

export default function GlobeAssembly() {
  return (
    <div className="flex items-center justify-center mt-6 md:mt-10 px-4 w-full max-w-screen-lg mx-auto">
      <div className="flex items-center justify-center gap-[3vw] md:gap-8 w-full">
        <Globe />
        <div className="h-[10vw] w-[1vw] min-h-[64px] max-h-[120px] min-w-[4px] max-w-[6px] bg-white shadow-2xl rounded-full" />
        <div className="flex flex-col text-white leading-tight space-y-3 md:space-y-4">
          <h1 className="text-2xl md:text-4xl font-extrabold drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
            Dom Caracappa
          </h1>
          <p className="bg-white text-lime-400 font-semibold text-lg md:text-xl px-4 py-2 rounded shadow-md w-fit">
            the Tech Writer
          </p>
        </div>
      </div>
    </div>
  );
}