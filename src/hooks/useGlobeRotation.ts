import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export function useGlobeRotation() {
  const rotationRef = useRef([0, 0, 0]);

  useFrame(() => {
    rotationRef.current[1] += 0.01; // rotate around Y axis
    rotationRef.current[0] += 0.001; // subtle X drift
  });

  return rotationRef;
}
