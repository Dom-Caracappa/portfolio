import {
    createContext,
    useContext,
    useRef,
    type ReactNode,
  } from 'react';
  import { useFrame } from '@react-three/fiber';
  import type { MutableRefObject } from 'react';
  
  type RotationContextType = MutableRefObject<[number, number, number]>;
  
  const GlobeRotationContext = createContext<RotationContextType | null>(null);
  
  export function GlobeRotationProvider({ children }: { children: ReactNode }) {
    const rotationRef = useRef<[number, number, number]>([0, 0, 0]);
  
    useFrame(() => {
      rotationRef.current[1] += 0.01; // Y-axis (main spin)
      rotationRef.current[0] += 0.002; // X-axis (subtle wobble)
    });
  
    return (
      <GlobeRotationContext.Provider value={rotationRef}>
        {children}
      </GlobeRotationContext.Provider>
    );
  }
  
  export function useGlobeRotation(): RotationContextType {
    const context = useContext(GlobeRotationContext);
    if (!context) {
      throw new Error('useGlobeRotation must be used within GlobeRotationProvider');
    }
    return context;
  }
  