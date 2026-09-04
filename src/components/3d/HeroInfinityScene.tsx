import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

function FloatingInfinity() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle continuous rotation
      meshRef.current.rotation.y += delta * 0.22;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
      
      // Smooth cursor parallax
      meshRef.current.rotation.y += (pointer.x * 0.25 - meshRef.current.rotation.y * 0.05) * delta;
      meshRef.current.rotation.x += (-pointer.y * 0.2 - meshRef.current.rotation.x * 0.05) * delta;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.12;
      outerRingRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <group position={[0, 0.2, -1.2]}>
      {/* Refined 3D Infinity Torus Knot - scaled appropriately with elegant metallic sheen */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh ref={meshRef} scale={[0.7, 0.7, 0.7]}>
          <torusKnotGeometry args={[1.25, 0.26, 128, 32, 2, 3]} />
          <meshPhysicalMaterial
            color="#1B2CC1"
            emissive="#7692FF"
            emissiveIntensity={0.35}
            roughness={0.18}
            metalness={0.85}
            clearcoat={1}
            clearcoatRoughness={0.12}
            reflectivity={0.9}
            transparent
            opacity={0.88}
          />
        </mesh>
      </Float>

      {/* Delicate Orbital Rings in #ABD2FA & #7692FF */}
      <group ref={outerRingRef}>
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[2.8, 0.012, 16, 120]} />
          <meshBasicMaterial color="#ABD2FA" transparent opacity={0.4} />
        </mesh>
        <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
          <torusGeometry args={[3.2, 0.008, 16, 120]} />
          <meshBasicMaterial color="#7692FF" transparent opacity={0.3} />
        </mesh>
      </group>
    </group>
  );
}

function AmbientParticles({ count }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const defaultCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 60 : 120;
  const particleCount = count ?? defaultCount;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color('#ABD2FA');
    const c2 = new THREE.Color('#7692FF');
    const c3 = new THREE.Color('#1B2CC1');

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 3.0 + Math.random() * 4.0;

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi) - 1.0;

      const mixed = Math.random() > 0.6 ? c1 : (Math.random() > 0.3 ? c2 : c3);
      col[i * 3] = mixed.r;
      col[i * 3 + 1] = mixed.g;
      col[i * 3 + 2] = mixed.b;
    }

    return [pos, col];
  }, [particleCount]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.6}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

export const HeroInfinityScene: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[8, 8, 6]} intensity={1.5} color="#ABD2FA" />
      <pointLight position={[-8, -6, -4]} intensity={1.2} color="#1B2CC1" />
      <pointLight position={[0, 6, 2]} intensity={1.0} color="#7692FF" />
      <directionalLight position={[0, 5, 5]} intensity={0.6} color="#ffffff" />
      
      <FloatingInfinity />
      <AmbientParticles count={120} />
    </>
  );
};
