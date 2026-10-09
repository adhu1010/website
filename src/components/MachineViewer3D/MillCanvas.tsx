'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Rotate3DIcon, InfoCircleIcon } from '../Icons';

// Subcomponent: Traditional Cast-Iron Copra Oil Expeller
function CopraOilExpeller({ isRunning, activePart }: { isRunning: boolean; activePart: string | null }) {
  const flywheelRef = useRef<THREE.Group>(null);
  const shaftRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (isRunning) {
      if (flywheelRef.current) {
        flywheelRef.current.rotation.z -= delta * 1.8;
      }
      if (shaftRef.current) {
        shaftRef.current.rotation.x += delta * 1.8;
      }
    }
  });

  return (
    <group position={[-1.2, 0, 0]}>
      {/* Heavy Cast-Iron Foundation Base */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[2.6, 0.3, 1.1]} />
        <meshStandardMaterial color="#222326" roughness={0.85} metalness={0.2} />
      </mesh>

      {/* Front & Back Bearing Pedestals */}
      <mesh position={[-1.0, 0.55, 0]}>
        <boxGeometry args={[0.3, 0.5, 0.6]} />
        <meshStandardMaterial color="#2d2e33" roughness={0.8} metalness={0.3} />
      </mesh>
      <mesh position={[1.0, 0.55, 0]}>
        <boxGeometry args={[0.3, 0.5, 0.6]} />
        <meshStandardMaterial color="#2d2e33" roughness={0.8} metalness={0.3} />
      </mesh>

      {/* Main Expeller Barrel / Oil Cage (Slotted Steel Bars) */}
      <group position={[0, 0.65, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.34, 0.34, 1.5, 24]} />
          <meshStandardMaterial
            color={activePart === 'barrel' ? '#8F3B1B' : '#3d3e42'}
            roughness={0.7}
            metalness={0.4}
          />
        </mesh>

        {/* Outer Heavy Steel Clamping Rings */}
        {[-0.5, -0.2, 0.1, 0.4].map((x, i) => (
          <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.38, 0.38, 0.08, 20]} />
            <meshStandardMaterial color="#1f2022" roughness={0.9} metalness={0.3} />
          </mesh>
        ))}

        {/* Central Worm Screw Shaft (visible through slotted ends) */}
        <mesh ref={shaftRef} position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.12, 0.12, 1.7, 12]} />
          <meshStandardMaterial color="#5a5c63" roughness={0.4} metalness={0.7} />
        </mesh>
      </group>

      {/* Feed Hopper on top of barrel for dried copra flakes */}
      <group position={[0.4, 1.15, 0]}>
        <mesh rotation={[0, Math.PI / 4, 0]}>
          <cylinderGeometry args={[0.38, 0.18, 0.5, 4]} />
          <meshStandardMaterial
            color={activePart === 'hopper' ? '#B47B1C' : '#544c42'}
            roughness={0.65}
            metalness={0.25}
          />
        </mesh>
      </group>

      {/* Heavy Spoked Drive Flywheel & Belt Pulley */}
      <group ref={flywheelRef} position={[-1.25, 0.65, 0]}>
        {/* Outer Rim */}
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.85, 0.06, 12, 32]} />
          <meshStandardMaterial
            color={activePart === 'flywheel' ? '#8F3B1B' : '#1f2024'}
            roughness={0.7}
            metalness={0.5}
          />
        </mesh>
        {/* Center Hub */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.18, 0.18, 0.15, 16]} />
          <meshStandardMaterial color="#28292d" roughness={0.7} metalness={0.4} />
        </mesh>
        {/* Six Heavy Cast Iron Spokes */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <mesh key={deg} rotation={[0, 0, (deg * Math.PI) / 180]}>
            <boxGeometry args={[0.05, 1.6, 0.04]} />
            <meshStandardMaterial color="#28292d" roughness={0.8} metalness={0.3} />
          </mesh>
        ))}
      </group>

      {/* Virgin Oil Drainage Trough Underneath */}
      <group position={[0, 0.28, 0]}>
        <mesh>
          <boxGeometry args={[1.4, 0.08, 0.6]} />
          <meshStandardMaterial
            color={activePart === 'trough' ? '#B47B1C' : '#735f42'}
            roughness={0.5}
            metalness={0.4}
          />
        </mesh>
        {/* Golden Cold-Pressed Coconut Oil Basin Catch */}
        <mesh position={[0, 0.04, 0]}>
          <boxGeometry args={[1.3, 0.02, 0.52]} />
          <meshStandardMaterial color="#dfad3b" roughness={0.2} metalness={0.1} />
        </mesh>
      </group>

      {/* Brass Oil Collection Vessel at Drain Spout */}
      <mesh position={[-0.8, 0.2, 0.45]}>
        <cylinderGeometry args={[0.18, 0.15, 0.35, 18]} />
        <meshStandardMaterial color="#b38a3e" roughness={0.35} metalness={0.65} />
      </mesh>

      {/* Pressed Copra Cake Discharge Chute */}
      <mesh position={[0.95, 0.45, 0]}>
        <boxGeometry args={[0.35, 0.2, 0.25]} />
        <meshStandardMaterial color="#2d2e33" roughness={0.8} />
      </mesh>
    </group>
  );
}

// Subcomponent: Traditional Stone Grain Chakki (Granite Flour Mill)
function StoneGrainChakki({ isRunning, activePart }: { isRunning: boolean; activePart: string | null }) {
  const runnerStoneRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (isRunning && runnerStoneRef.current) {
      runnerStoneRef.current.rotation.y += delta * 1.2;
    }
  });

  return (
    <group position={[1.8, 0, 0]}>
      {/* Heavy Timber / Masonry Stand */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[1.3, 0.7, 1.3]} />
        <meshStandardMaterial color="#4a3e31" roughness={0.9} metalness={0.1} />
      </mesh>

      {/* Lower Stationary Granite Bedstone */}
      <mesh position={[0, 0.78, 0]}>
        <cylinderGeometry args={[0.55, 0.55, 0.16, 28]} />
        <meshStandardMaterial color="#6e6c69" roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Upper Rotating Granite Runner Stone */}
      <mesh ref={runnerStoneRef} position={[0, 0.96, 0]}>
        <cylinderGeometry args={[0.52, 0.52, 0.18, 28]} />
        <meshStandardMaterial
          color={activePart === 'chakki' ? '#8F3B1B' : '#7d7a76'}
          roughness={0.95}
          metalness={0.05}
        />
      </mesh>

      {/* Hopper and Feed Chute above Stones */}
      <group position={[0, 1.35, 0]}>
        <mesh>
          <cylinderGeometry args={[0.3, 0.1, 0.45, 16]} />
          <meshStandardMaterial
            color={activePart === 'chakki' ? '#B47B1C' : '#5c4b38'}
            roughness={0.8}
            metalness={0.15}
          />
        </mesh>
      </group>

      {/* Flour Discharge Spout and Jute Bag Catch */}
      <mesh position={[0.6, 0.65, 0]}>
        <boxGeometry args={[0.25, 0.1, 0.2]} />
        <meshStandardMaterial color="#8c8270" roughness={0.7} />
      </mesh>
      <mesh position={[0.75, 0.25, 0]}>
        <boxGeometry args={[0.35, 0.5, 0.35]} />
        <meshStandardMaterial color="#a18357" roughness={0.95} />
      </mesh>
    </group>
  );
}

// Subcomponent: Workshop Concrete Foundation Platform
function WorkshopPlatform() {
  return (
    <group position={[0, -0.05, 0]}>
      {/* Main Floor Slab */}
      <mesh receiveShadow position={[0, -0.1, 0]}>
        <boxGeometry args={[7.2, 0.2, 4.4]} />
        <meshStandardMaterial color="#ddd7cb" roughness={0.95} metalness={0.05} />
      </mesh>
      {/* Perimeter Iron Curb Edge */}
      <mesh position={[0, 0.01, 0]}>
        <boxGeometry args={[7.25, 0.03, 4.45]} />
        <meshStandardMaterial color="#3b3b3e" roughness={0.8} metalness={0.3} />
      </mesh>
    </group>
  );
}

export default function MillCanvas() {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [activePart, setActivePart] = useState<string | null>(null);

  const parts = [
    { id: 'barrel', label: 'Slotted Expeller Barrel' },
    { id: 'flywheel', label: 'Spoked Belt Flywheel' },
    { id: 'hopper', label: 'Copra Flake Hopper' },
    { id: 'trough', label: 'Cold-Pressed Oil Catch' },
    { id: 'chakki', label: 'Granite Stone Chakki' },
  ];

  return (
    <div className="w-full bg-mill-unbleached border border-mill-border relative">
      {/* Header bar within viewer */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 border-b border-mill-border bg-mill-paper">
        <div>
          <span className="font-serif text-base text-mill-ink font-semibold block">
            Traditional Machinery Rig: Copra Expeller & Granite Stone Mill
          </span>
          <span className="text-xs text-mill-muted block">
            Heavy cast-iron continuous screw press alongside traditional vertical grain stones
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setIsRunning(!isRunning)}
            className="px-3 py-1.5 text-xs font-serif font-medium bg-mill-cream border border-mill-borderDark text-mill-ink hover:bg-mill-paper transition-colors duration-150 rounded-sm"
          >
            {isRunning ? 'Pause Rotation' : 'Resume Mechanical Drive'}
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport */}
      <div className="w-full h-[400px] sm:h-[460px] md:h-[520px] relative bg-[#e7e1d5] cursor-grab active:cursor-grabbing">
        <Canvas
          shadows
          camera={{ position: [0, 2.8, 5.8], fov: 42 }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        >
          <color attach="background" args={['#e7e1d5']} />

          {/* Natural Workshop Lighting */}
          <ambientLight intensity={0.85} color="#fffcf5" />
          <directionalLight
            position={[5, 8, 4]}
            intensity={1.2}
            color="#fff2db"
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-4, 3, -3]} intensity={0.4} color="#e5ebf0" />
          <pointLight position={[0, 2, 0]} intensity={0.3} color="#ffe2b3" />

          {/* Machinery Elements */}
          <group position={[0, 0, 0]}>
            <WorkshopPlatform />
            <CopraOilExpeller isRunning={isRunning} activePart={activePart} />
            <StoneGrainChakki isRunning={isRunning} activePart={activePart} />
          </group>

          {/* Responsive Touch and Mouse Orbit Controls */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            minDistance={3.5}
            maxDistance={12}
            maxPolarAngle={Math.PI / 2.08}
            dampingFactor={0.08}
          />
        </Canvas>

        {/* Subtle Watermark Indicator */}
        <div className="absolute bottom-3 left-3 bg-mill-cream/90 border border-mill-border px-2.5 py-1 text-[11px] text-mill-muted pointer-events-none rounded-none">
          Drag to orbit | Pinch / scroll to inspect
        </div>
      </div>

      {/* Component selector pills */}
      <div className="p-3 bg-mill-paper border-t border-mill-border flex flex-wrap items-center gap-2 text-xs">
        <span className="font-serif text-mill-ink font-medium mr-1 text-xs">
          Highlight Part:
        </span>
        {parts.map((part) => (
          <button
            key={part.id}
            type="button"
            onClick={() => setActivePart(activePart === part.id ? null : part.id)}
            className={`px-2.5 py-1 border transition-colors duration-150 rounded-sm ${
              activePart === part.id
                ? 'bg-mill-terracotta text-mill-cream border-mill-terracotta font-medium'
                : 'bg-mill-cream text-mill-ink border-mill-borderDark hover:bg-mill-unbleached'
            }`}
          >
            {part.label}
          </button>
        ))}
        {activePart && (
          <button
            type="button"
            onClick={() => setActivePart(null)}
            className="text-[11px] text-mill-muted hover:text-mill-ink underline ml-auto"
          >
            Clear Highlight
          </button>
        )}
      </div>
    </div>
  );
}
