import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html, Float } from '@react-three/drei';
import * as THREE from 'three';

export interface EcosystemNode {
  id: string;
  name: string;
  category: string;
  description: string;
  quote: string;
  angleIndex: number;
  orbitTier: 1 | 2;
  yOffset: number;
}

export const ECOSYSTEM_NODES: EcosystemNode[] = [
  {
    id: 'broker-house',
    name: 'Broker House',
    category: 'HYBRID BROKER (MM + STP/ECN)',
    description: 'Deep institutional liquidity, bank-grade segregated client vaults, and ultra-fast MT5 execution.',
    quote: 'Technology + Trust + Flexibility + Security',
    angleIndex: 0,
    orbitTier: 1,
    yOffset: -0.12,
  },
  {
    id: 'forex-cards',
    name: 'Forex Cards',
    category: 'PHYSICAL LUXURY ASSET',
    description: 'Three luxury tiers (Sapphire, Obsidian, Diamond Quartz) accepted in 190+ countries with seamless off-ramp.',
    quote: 'YOUR MONEY. YOUR WORLD. Exclusive. Global. Limitless.',
    angleIndex: 1,
    orbitTier: 2,
    yOffset: 0.18,
  },
  {
    id: 'crypto-arbitrage',
    name: 'Crypto Arbitrage',
    category: 'HIGH-FREQUENCY SPREAD ENGINE',
    description: 'Sub-millisecond price disparity capture across global Tier-1 crypto order books.',
    quote: 'The future of arbitrage is almost here.',
    angleIndex: 2,
    orbitTier: 1,
    yOffset: -0.15,
  },
  {
    id: 'fund-management',
    name: 'Fund Management',
    category: 'INSTITUTIONAL CAPITAL',
    description: 'Professional portfolio management, multi-asset risk hedging, and transparent live reporting.',
    quote: 'Expertise you trust. Growth you deserve.',
    angleIndex: 3,
    orbitTier: 2,
    yOffset: 0.22,
  },
  {
    id: 'velora-infinity',
    name: 'Velora Global',
    category: 'LIMITLESS WEALTH PROTOCOL',
    description: 'The world’s complete financial ecosystem unifying markets, capital, intelligence, and freedom.',
    quote: 'Infinite Opportunities. Limitless Wealth.',
    angleIndex: 4,
    orbitTier: 1,
    yOffset: -0.18,
  },
  {
    id: 'prop-firm',
    name: 'Prop Funded Firm',
    category: 'PROPRIETARY CAPITAL ALLOCATION',
    description: 'Funded trading accounts up to $200,000+ with 85–90% profit splits and zero personal risk.',
    quote: 'We fund. You trade. Together, we build the future.',
    angleIndex: 5,
    orbitTier: 2,
    yOffset: 0.16,
  },
  {
    id: 'ai-agent',
    name: 'AI Agent',
    category: 'NEURAL TRADING CO-PILOT',
    description: 'Real-time multi-market signals, institutional sentiment scoring, and automated risk mitigation.',
    quote: 'Think. Analyze. Decide. Evolve.',
    angleIndex: 6,
    orbitTier: 1,
    yOffset: -0.22,
  },
  {
    id: 'automation-bot',
    name: 'Automation Bot',
    category: 'ALGORITHMIC EXECUTION',
    description: 'License-based copy trading bots with automated risk guards and intelligent order routing.',
    quote: 'Intelligence that trades. Automation that delivers.',
    angleIndex: 7,
    orbitTier: 2,
    yOffset: 0.2,
  },
];

interface VeloraOrbitalSceneProps {
  activeNodeId: string;
  onSelectNode: (node: EcosystemNode) => void;
  isHovered: boolean;
  setIsHovered: (hovered: boolean) => void;
  scrollProgress: number; // 0 to 1
  isMobile: boolean;
}

// ─── AMBIENT PARTICLES (Tiny Floating Stars) ───
function AmbientCosmicParticles({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorA = new THREE.Color('#ABD2FA');
    const colorB = new THREE.Color('#7692FF');
    const colorC = new THREE.Color('#ffffff');

    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI * 0.9;

      pos[i * 3] = radius * Math.cos(phi) * Math.sin(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * 0.7;
      pos[i * 3 + 2] = radius * Math.cos(phi) * Math.cos(theta);

      const choice = Math.random();
      const c = choice < 0.4 ? colorA : choice < 0.7 ? colorB : colorC;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// ─── 3D ORBITAL RINGS ───
function OrbitalRings() {
  const innerRingRef = useRef<THREE.Mesh>(null!);
  const outerRingRef = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (innerRingRef.current) {
      innerRingRef.current.rotation.z -= delta * 0.01;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += delta * 0.008;
    }
  });

  return (
    <group>
      {/* Primary Orbital Ring (Plane tilted) */}
      <mesh ref={innerRingRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.55, 0.008, 16, 128]} />
        <meshBasicMaterial
          color="#7692FF"
          transparent
          opacity={0.35}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Secondary Subtle Orbital Ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2.05, 0.08, -0.05]}>
        <torusGeometry args={[2.95, 0.006, 16, 128]} />
        <meshBasicMaterial
          color="#ABD2FA"
          transparent
          opacity={0.22}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Outer Subtle Dashed Accent Ring */}
      <mesh rotation={[Math.PI / 1.95, -0.06, 0.04]}>
        <torusGeometry args={[3.25, 0.004, 16, 96]} />
        <meshBasicMaterial
          color="#2539d9"
          transparent
          opacity={0.16}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

// ─── CENTRAL VELORA INFINITY CORE ───
function VeloraCore({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Gentle core float & breathing
      meshRef.current.rotation.y += delta * (isHovered ? 0.08 : 0.18);
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.05;
    }
  });

  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      {/* Core Halo Glow */}
      <mesh>
        <sphereGeometry args={[0.55, 32, 32]} />
        <meshBasicMaterial
          color="#1B2CC1"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Central Glass Disk / Emblem Hub */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.48, 0.48, 0.06, 48]} />
        <meshPhysicalMaterial
          color="#0e1d52"
          emissive="#7692FF"
          emissiveIntensity={0.2}
          roughness={0.15}
          metalness={0.9}
          clearcoat={1}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Outer Luminous Ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.52, 0.015, 16, 64]} />
        <meshBasicMaterial
          color="#ABD2FA"
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* HTML Overlay: Velora Brand Symbol & Text in Core */}
      <Html center distanceFactor={7.5} zIndexRange={[30, 50]} pointerEvents="none">
        <div className="flex flex-col items-center justify-center select-none cursor-pointer w-28 text-center pointer-events-none">
          <div className="w-12 h-7 flex items-center justify-center mb-0.5 filter drop-shadow-[0_0_8px_rgba(171,210,250,0.8)]">
            <img
              src="/assets/infinity.svg"
              alt="Velora Infinity"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="text-[9px] font-display font-black tracking-[0.22em] text-white uppercase drop-shadow-md">
            VELORA
          </span>
          <span className="text-[7px] font-mono tracking-[0.3em] text-[#ABD2FA] uppercase font-bold">
            GLOBAL
          </span>
        </div>
      </Html>
    </group>
  );
}

// ─── DYNAMIC LASER SPOKE LINE ───
function DynamicConnectionLine({
  from,
  to,
  isActive,
  isDimmed,
}: {
  from: [number, number, number];
  to: [number, number, number];
  isActive: boolean;
  isDimmed: boolean;
}) {
  const lineRef = useRef<THREE.Line>(null!);

  const geometry = useMemo(() => {
    const points = [new THREE.Vector3(...from), new THREE.Vector3(...to)];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [from, to]);

  useEffect(() => {
    if (lineRef.current) {
      const positions = lineRef.current.geometry.attributes.position;
      positions.setXYZ(0, from[0], from[1], from[2]);
      positions.setXYZ(1, to[0], to[1], to[2]);
      positions.needsUpdate = true;
    }
  }, [from, to]);

  const lineColor = isActive ? '#ABD2FA' : '#7692FF';
  const lineOpacity = isActive ? 0.95 : isDimmed ? 0.05 : 0.2;

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: lineOpacity,
      blending: THREE.AdditiveBlending,
      linewidth: isActive ? 2 : 1,
    }))} ref={lineRef} />
  );
}

// ─── SINGLE ORBITING NODE ───
function OrbitNodeItem({
  node,
  angle,
  isActive,
  hasActiveSibling,
  onSelect,
  onHoverStart,
  onHoverEnd,
  isMobile,
}: {
  node: EcosystemNode;
  angle: number;
  isActive: boolean;
  hasActiveSibling: boolean;
  onSelect: () => void;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const currentPos = useRef(new THREE.Vector3());

  // Radius based on orbit tier
  const baseRadius = isMobile
    ? node.orbitTier === 1
      ? 2.1
      : 2.45
    : node.orbitTier === 1
    ? 2.5
    : 2.9;

  // 3D positioning on the orbital plane (with tilt & individual height offset)
  const targetX = Math.cos(angle) * baseRadius;
  const targetZ = Math.sin(angle) * baseRadius;
  const targetY = Math.sin(angle) * 0.35 + node.yOffset * (isMobile ? 0.5 : 1);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // If active/hovered, pull node slightly toward camera (positive Z in view space)
      const hoverZOffset = isActive ? 0.45 : 0;
      const hoverScale = isActive ? (isMobile ? 1.15 : 1.25) : 1;

      // Smooth interpolation for weightless, spring-like feel
      groupRef.current.position.x = THREE.MathUtils.lerp(
        groupRef.current.position.x,
        targetX,
        delta * 6
      );
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        targetY,
        delta * 6
      );
      groupRef.current.position.z = THREE.MathUtils.lerp(
        groupRef.current.position.z,
        targetZ + hoverZOffset,
        delta * 6
      );

      groupRef.current.scale.setScalar(
        THREE.MathUtils.lerp(groupRef.current.scale.x, hoverScale, delta * 8)
      );

      currentPos.current.copy(groupRef.current.position);
    }
  });

  const isDimmed = hasActiveSibling && !isActive;

  return (
    <>
      {/* Laser spoke connecting node to central core */}
      <DynamicConnectionLine
        from={[0, 0, 0]}
        to={[currentPos.current.x, currentPos.current.y, currentPos.current.z]}
        isActive={isActive}
        isDimmed={isDimmed}
      />

      <group ref={groupRef} position={[targetX, targetY, targetZ]}>
        {/* Subtle 3D Glass Sphere Bead Anchor */}
        <mesh>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial
            color={isActive ? '#ABD2FA' : '#7692FF'}
            transparent
            opacity={isActive ? 0.9 : isDimmed ? 0.2 : 0.5}
            blending={THREE.AdditiveBlending}
          />
        </mesh>

        {/* Outer Pulsing Glow Aura when Active */}
        {isActive && (
          <mesh>
            <sphereGeometry args={[0.22, 24, 24]} />
            <meshBasicMaterial
              color="#7692FF"
              transparent
              opacity={0.3}
              blending={THREE.AdditiveBlending}
            />
          </mesh>
        )}

        {/* High-Fidelity Interactive HTML Billboard Node */}
        <Html
          center
          distanceFactor={isMobile ? 6.5 : 7.2}
          zIndexRange={[20, 70]}
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            onPointerEnter={(e) => {
              e.stopPropagation();
              onHoverStart();
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              onHoverEnd();
            }}
            className={`group relative flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-300 ${
              isDimmed ? 'opacity-40 scale-90' : 'opacity-100 scale-100'
            }`}
          >
            {/* Circular Glassmorphic Button Node */}
            <div
              className={`relative flex items-center justify-center rounded-full transition-all duration-500 ${
                isMobile ? 'w-11 h-11' : 'w-14 h-14'
              } ${
                isActive
                  ? 'bg-gradient-to-tr from-[#1B2CC1] via-[#7692FF] to-[#ABD2FA] text-white shadow-[0_0_35px_rgba(118,146,255,0.85)] border-2 border-white ring-4 ring-[#ABD2FA]/30'
                  : 'bg-[#091540]/85 text-slate-300 hover:text-white hover:bg-[#0e1d52] border border-white/20 hover:border-[#ABD2FA]/60 backdrop-blur-xl shadow-[0_6px_25px_rgba(5,12,38,0.6)] group-hover:shadow-[0_0_25px_rgba(118,146,255,0.5)]'
              }`}
            >
              <span className="font-mono font-bold text-xs sm:text-sm tracking-wider">
                0{node.angleIndex + 1}
              </span>

              {/* Pulsing ring animation on active node */}
              {isActive && (
                <span className="absolute inset-0 rounded-full border-2 border-[#ABD2FA] animate-ping opacity-60 pointer-events-none" />
              )}
            </div>

            {/* Product Name Label (Always upright and readable) */}
            <div
              className={`mt-1.5 px-2.5 py-0.5 rounded-full backdrop-blur-md transition-all duration-300 text-center whitespace-nowrap ${
                isActive
                  ? 'bg-[#091540]/90 border border-[#ABD2FA]/60 text-white font-semibold text-[11px] shadow-[0_0_12px_rgba(118,146,255,0.5)]'
                  : 'bg-[#050c26]/70 border border-white/10 text-slate-300/90 text-[10px] group-hover:text-white group-hover:border-[#7692FF]/40'
              }`}
            >
              <span className="font-sans tracking-wide">{node.name}</span>
            </div>
          </div>
        </Html>
      </group>
    </>
  );
}

// ─── MASTER 3D ORBIT SYSTEM WITH PARALLAX & CAMERA DOLLY ───
function MasterOrbitRig({
  activeNodeId,
  onSelectNode,
  isHovered,
  setIsHovered,
  scrollProgress,
  isMobile,
}: VeloraOrbitalSceneProps) {
  const systemGroupRef = useRef<THREE.Group>(null!);
  const { pointer, camera } = useThree();

  // Rotation physics state
  const currentAngle = useRef(0);
  const currentSpeed = useRef(0.045);
  const targetSpeed = useRef(0.045);

  // Parallax tilt spring targets
  const targetTiltX = useRef(0.35); // Base inclination angle
  const targetTiltY = useRef(0);

  // Smooth hover deceleration and acceleration
  useEffect(() => {
    if (isHovered) {
      // Dramatically slow down on hover, but DO NOT abruptly freeze
      targetSpeed.current = isMobile ? 0.003 : 0.006;
    } else {
      // Gradually resume majestic, elegant orbit
      targetSpeed.current = isMobile ? 0.03 : 0.045;
    }
  }, [isHovered, isMobile]);

  useFrame((_, delta) => {
    // 1. Smoothly interpolate orbital speed (deceleration/acceleration)
    currentSpeed.current = THREE.MathUtils.lerp(
      currentSpeed.current,
      targetSpeed.current,
      delta * 2.5
    );
    currentAngle.current += currentSpeed.current * delta;

    // 2. Cursor Parallax Tilt: subtle, restrained, weightless
    const maxTilt = isMobile ? 0.08 : 0.22;
    const desiredTiltX = 0.38 - pointer.y * maxTilt * 0.7; // Vertical perspective shift
    const desiredTiltY = pointer.x * maxTilt; // Left/right tilt

    targetTiltX.current = THREE.MathUtils.lerp(
      targetTiltX.current,
      desiredTiltX,
      delta * 2.8
    );
    targetTiltY.current = THREE.MathUtils.lerp(
      targetTiltY.current,
      desiredTiltY,
      delta * 2.8
    );

    if (systemGroupRef.current) {
      systemGroupRef.current.rotation.x = targetTiltX.current;
      systemGroupRef.current.rotation.y = targetTiltY.current;
    }

    // 3. Scroll-driven camera dolly zoom (Entering the universe)
    // As user scrolls through section, camera zooms gently from 5.4 to 4.7
    const baseCameraZ = isMobile ? 5.8 : 5.2;
    const zoomOffset = scrollProgress * (isMobile ? -0.4 : -0.7);
    const targetCameraZ = baseCameraZ + zoomOffset;

    camera.position.z = THREE.MathUtils.lerp(
      camera.position.z,
      targetCameraZ,
      delta * 2.5
    );
  });

  return (
    <>
      {/* 3D Lighting */}
      <ambientLight intensity={0.9} />
      <pointLight position={[0, 3, 2]} intensity={2.2} color="#ABD2FA" />
      <pointLight position={[0, -2, -2]} intensity={1.4} color="#1B2CC1" />
      <directionalLight position={[3, 5, 4]} intensity={0.8} color="#ffffff" />

      {/* Background Subtle Dust Particles */}
      <AmbientCosmicParticles count={isMobile ? 40 : 90} />

      {/* Main Interactive Tilting Orbital System */}
      <group ref={systemGroupRef} position={[0, 0, 0]}>
        {/* Central Core */}
        <VeloraCore isHovered={isHovered} />

        {/* 3D Orbital Rings */}
        <OrbitalRings />

        {/* 8 Satellite Ecosystem Nodes */}
        {ECOSYSTEM_NODES.map((node) => {
          // Base angular spacing: 8 nodes = 45 deg (PI/4) apart
          const baseNodeAngle = (node.angleIndex * Math.PI) / 4;
          const totalAngle = baseNodeAngle + currentAngle.current;
          const isActive = activeNodeId === node.id;

          return (
            <OrbitNodeItem
              key={node.id}
              node={node}
              angle={totalAngle}
              isActive={isActive}
              hasActiveSibling={isHovered}
              onSelect={() => onSelectNode(node)}
              onHoverStart={() => {
                setIsHovered(true);
                onSelectNode(node);
              }}
              onHoverEnd={() => {
                setIsHovered(false);
              }}
              isMobile={isMobile}
            />
          );
        })}
      </group>
    </>
  );
}

// ─── EXPORTED CANVAS WRAPPER COMPONENT ───
interface VeloraOrbitalEcosystem3DProps {
  activeNodeId: string;
  onSelectNode: (node: EcosystemNode) => void;
  scrollProgress?: number;
  className?: string;
}

export const VeloraOrbitalEcosystem3D: React.FC<VeloraOrbitalEcosystem3DProps> = ({
  activeNodeId,
  onSelectNode,
  scrollProgress = 0,
  className = 'w-full h-[440px] sm:h-[540px] lg:h-[600px]',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Performance: Pause R3F when off-screen
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}
    >
      {/* Soft Ambient Radial Background Aura */}
      <div className="absolute w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-gradient-to-tr from-[#1B2CC1]/20 via-[#7692FF]/15 to-transparent blur-[120px] pointer-events-none" />

      <Canvas
        camera={{ position: [0, 0.8, 5.2], fov: 48 }}
        dpr={isMobile ? [1, 1.2] : [1, 1.6]}
        frameloop={isVisible ? 'always' : 'never'}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <MasterOrbitRig
          activeNodeId={activeNodeId}
          onSelectNode={onSelectNode}
          isHovered={isHovered}
          setIsHovered={setIsHovered}
          scrollProgress={scrollProgress}
          isMobile={isMobile}
        />
      </Canvas>
    </div>
  );
};
