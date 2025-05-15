
// src/components/Globe.tsx
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

function SpinningGlobe() {
  const meshRef = useRef<Mesh>(null!);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 16, 8]} />
      <meshBasicMaterial wireframe color="black" />
    </mesh>
  );
}

export default function Globe() {
  return (
    <div className="aspect-square w-[25vw] min-w-[96px] max-w-[180px] md:max-w-[240px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <SpinningGlobe />
      </Canvas>
    </div>
  );

  
}