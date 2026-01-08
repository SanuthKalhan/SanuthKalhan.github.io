"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Particles({ activeSection, targets }: { activeSection: string, targets: any }) {
  const pointsRef = useRef<THREE.Points>(null!);
  const particleCount = 20000; // Match sampling count

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current || !targets[activeSection]) return;

    const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const targetSet = targets[activeSection];
    const { x: mouseX, y: mouseY } = state.mouse;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      // Morphing towards target
      currentPositions[i3]     += (targetSet[i3]     - currentPositions[i3])     * 0.07;
      currentPositions[i3 + 1] += (targetSet[i3 + 1] - currentPositions[i3 + 1]) * 0.07;
      currentPositions[i3 + 2] += (targetSet[i3 + 2] - currentPositions[i3 + 2]) * 0.07;

      // Mouse gravity effect
      const dx = mouseX * 6 - currentPositions[i3];
      const dy = mouseY * 6 - currentPositions[i3 + 1];
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 2) {
        currentPositions[i3]     += dx * 0.015;
        currentPositions[i3 + 1] += dy * 0.015;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}           // Larger particles for better visibility
        color="#333333"
        transparent
        opacity={0.85}        // Higher opacity
        sizeAttenuation={true}
        depthWrite={false}    // Better blending
      />
    </points>
  );
}