import React, { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const WireframeGlobe = () => {
  const groupRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const globeRadius = viewport.width < 6 ? 1.0 : 1.8;

  const edges = useMemo(() => {
    const sphere = new THREE.SphereGeometry(globeRadius, 16, 16);
    return new THREE.EdgesGeometry(sphere);
  }, [globeRadius]);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <>
      <ambientLight intensity={viewport.width < 6 ? 1.5 : 1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <group ref={groupRef} scale={0.7}>
        <lineSegments geometry={edges}>
          <lineBasicMaterial color="black" />
        </lineSegments>
      </group>
    </>
  );
};

const Globe = () => {
  return (
    <Canvas 
    style={{ width: "100%", height: "100%" }}
  camera={{ position: [0, 0, 2.2], fov: 50 }}
    >
      <WireframeGlobe />
    </Canvas>
  );
};

export default Globe;
