import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

function NeuralNodes({ count }: { count?: number }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();
  const defaultCount = typeof window !== 'undefined' && window.innerWidth < 768 ? 70 : 120;
  const nodeCount = count ?? defaultCount;

  const [nodePositions, connections] = useMemo(() => {
    const nodes: [number, number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      const isLeft = i < nodeCount / 2;
      const xOffset = isLeft ? -0.4 : 0.4;
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 1.1 + Math.random() * 0.4;
      
      const sinPhi = Math.sin(phi);
      const x = r * sinPhi * Math.cos(theta) * 0.85 + xOffset;
      const y = r * sinPhi * Math.sin(theta) * 1.1;
      const z = r * Math.cos(phi) * 0.9;
      nodes.push([x, y, z]);
    }

    const lineIndices: number[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dz = nodes[i][2] - nodes[j][2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 0.65) {
          lineIndices.push(...nodes[i], ...nodes[j]);
        }
      }
    }

    return [nodes, new Float32Array(lineIndices)];
  }, [nodeCount]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.25;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
      groupRef.current.rotation.y += (pointer.x * 0.3 - groupRef.current.rotation.y * 0.05) * delta;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Synaptic Lines in #7692FF */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[connections, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color="#7692FF"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Neural Nodes in #ABD2FA & #7692FF */}
      {nodePositions.map((pos, idx) => {
        const isIce = pos[0] < 0;
        return (
          <mesh key={idx} position={pos}>
            <sphereGeometry args={[0.035, 8, 8]} />
            <meshBasicMaterial
              color={isIce ? '#ABD2FA' : '#7692FF'}
              transparent
              opacity={0.9}
            />
          </mesh>
        );
      })}

      {/* Central Core in #091540 */}
      <mesh>
        <sphereGeometry args={[0.75, 24, 24]} />
        <meshStandardMaterial
          color="#091540"
          roughness={0.2}
          metalness={0.8}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

export const NeuralBrain3D: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1.8} color="#ABD2FA" />
      <pointLight position={[-5, -5, -3]} intensity={1.5} color="#1B2CC1" />
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
        <NeuralNodes count={130} />
      </Float>
    </>
  );
};
