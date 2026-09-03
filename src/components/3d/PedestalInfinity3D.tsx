import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

export const PedestalInfinity3D: React.FC = () => {
  const infinityRef = useRef<THREE.Mesh>(null!);
  const lightRaysRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (infinityRef.current) {
      infinityRef.current.rotation.y += delta * 0.4;
      infinityRef.current.position.y = 0.95 + Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
    if (lightRaysRef.current) {
      lightRaysRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[0, 4, 2]} intensity={2.2} color="#00d4ff" />
      <pointLight position={[-3, 1, -2]} intensity={1.8} color="#a855f7" />
      <directionalLight position={[0, 6, 4]} intensity={1.0} color="#ffffff" />

      <group position={[0, -0.6, 0]}>
        {/* Tier 1 Pedestal Base */}
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[2.5, 2.7, 0.2, 48]} />
          <meshStandardMaterial
            color="#0c1326"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Tier 2 Pedestal Middle */}
        <mesh position={[0, -0.15, 0]}>
          <cylinderGeometry args={[2.1, 2.3, 0.18, 48]} />
          <meshStandardMaterial
            color="#121d3a"
            roughness={0.15}
            metalness={0.9}
          />
        </mesh>

        {/* Tier 3 Glowing Upper Pedestal */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.7, 1.9, 0.16, 48]} />
          <meshStandardMaterial
            color="#1a274c"
            roughness={0.1}
            metalness={0.95}
          />
        </mesh>

        {/* Luminous Ring Border */}
        <mesh position={[0, 0.09, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.65, 1.72, 64]} />
          <meshBasicMaterial color="#00d4ff" side={THREE.DoubleSide} />
        </mesh>

        {/* Floating Glowing Velora Infinity Symbol */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh ref={infinityRef} position={[0, 0.95, 0]} scale={[0.8, 0.8, 0.8]}>
            <torusKnotGeometry args={[0.9, 0.25, 128, 32, 2, 3]} />
            <meshPhysicalMaterial
              color="#9333ea"
              emissive="#00d4ff"
              emissiveIntensity={0.5}
              roughness={0.1}
              metalness={0.9}
              clearcoat={1}
            />
          </mesh>
        </Float>

        {/* Subtle Light Stream Rings */}
        <group ref={lightRaysRef} position={[0, 0.1, 0]}>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.8, 0.82, 32]} />
            <meshBasicMaterial color="#a855f7" transparent opacity={0.4} side={THREE.DoubleSide} />
          </mesh>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.2, 1.22, 32]} />
            <meshBasicMaterial color="#00d4ff" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </group>
    </>
  );
};
