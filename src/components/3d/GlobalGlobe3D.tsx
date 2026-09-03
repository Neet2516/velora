import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function latLngToVector3(lat: number, lng: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return [x, y, z];
}

const GLOBAL_HUBS = [
  { name: 'New York', lat: 40.7128, lng: -74.006, color: '#ABD2FA' },
  { name: 'London', lat: 51.5074, lng: -0.1278, color: '#7692FF' },
  { name: 'Zurich', lat: 47.3769, lng: 8.5417, color: '#ABD2FA' },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, color: '#7692FF' },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198, color: '#ABD2FA' },
  { name: 'Tokyo', lat: 35.6762, lng: 139.6503, color: '#7692FF' },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093, color: '#ABD2FA' }
];

export const GlobalGlobe3D: React.FC = () => {
  const globeRef = useRef<THREE.Group>(null!);
  const { pointer } = useThree();
  const radius = 2.0;

  const arcCurves = useMemo(() => {
    const lines: THREE.Vector3[][] = [];
    for (let i = 0; i < GLOBAL_HUBS.length; i++) {
      for (let j = i + 1; j < GLOBAL_HUBS.length; j++) {
        if ((i + j) % 2 === 0 || i === 3) {
          const v1 = new THREE.Vector3(...latLngToVector3(GLOBAL_HUBS[i].lat, GLOBAL_HUBS[i].lng, radius));
          const v2 = new THREE.Vector3(...latLngToVector3(GLOBAL_HUBS[j].lat, GLOBAL_HUBS[j].lng, radius));
          
          const mid = new THREE.Vector3().addVectors(v1, v2).multiplyScalar(0.5);
          const distance = v1.distanceTo(v2);
          mid.normalize().multiplyScalar(radius + distance * 0.25);

          const curve = new THREE.QuadraticBezierCurve3(v1, mid, v2);
          lines.push(curve.getPoints(24));
        }
      }
    }
    return lines;
  }, [radius]);

  useFrame((_, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.18;
      globeRef.current.rotation.x = -pointer.y * 0.25;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 3, 5]} intensity={1.2} color="#ABD2FA" />
      <pointLight position={[-5, -3, -5]} intensity={0.9} color="#1B2CC1" />

      <group ref={globeRef}>
        {/* Core Globe in #091540 */}
        <mesh>
          <sphereGeometry args={[radius, 36, 36]} />
          <meshStandardMaterial
            color="#091540"
            roughness={0.35}
            metalness={0.75}
            transparent
            opacity={0.88}
          />
        </mesh>

        {/* Outer Grid in #7692FF */}
        <mesh>
          <sphereGeometry args={[radius * 1.008, 24, 24]} />
          <meshBasicMaterial
            color="#7692FF"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>

        {/* Atmospheric Glow Ring in #1B2CC1 */}
        <mesh>
          <sphereGeometry args={[radius * 1.08, 32, 32]} />
          <meshBasicMaterial
            color="#1B2CC1"
            wireframe
            transparent
            opacity={0.12}
          />
        </mesh>

        {/* Global Hubs */}
        {GLOBAL_HUBS.map((hub, idx) => {
          const pos = latLngToVector3(hub.lat, hub.lng, radius * 1.015);
          return (
            <group key={idx} position={pos}>
              <mesh>
                <sphereGeometry args={[0.06, 12, 12]} />
                <meshBasicMaterial color={hub.color} />
              </mesh>
              <mesh>
                <ringGeometry args={[0.08, 0.11, 16]} />
                <meshBasicMaterial color={hub.color} transparent opacity={0.65} side={THREE.DoubleSide} />
              </mesh>
            </group>
          );
        })}

        {/* Arcs in #ABD2FA & #7692FF */}
        {arcCurves.map((pts, idx) => {
          const geometry = new THREE.BufferGeometry().setFromPoints(pts);
          const material = new THREE.LineBasicMaterial({
            color: idx % 2 === 0 ? '#ABD2FA' : '#7692FF',
            transparent: true,
            opacity: 0.55,
            blending: THREE.AdditiveBlending,
          });
          const lineObj = new THREE.Line(geometry, material);
          return <primitive key={idx} object={lineObj} />;
        })}
      </group>
    </>
  );
};
