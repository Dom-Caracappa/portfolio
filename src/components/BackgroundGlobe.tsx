// src/components/BackgroundGlobe.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { useGlobeRotation } from '../context/GlobeRotationContext';

function SpinningBackground() {
  const meshRef = useRef<Mesh>(null!);
  const rotation = useGlobeRotation();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.set(...rotation.current);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[10, 16, 16]} />
      <meshBasicMaterial
        wireframe
        color="black"
        side={2}
        transparent
        opacity={0.05}
      />
    </mesh>
  );
}

export default function BackgroundGlobe() {
  return (
    <div className="fixed inset-0 -z-50 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <SpinningBackground />
      </Canvas>
    </div>
  );
}
