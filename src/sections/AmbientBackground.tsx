import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";

function AmbientForm() {
  const meshRef = useRef<Mesh>(null);

  const color = useMemo(() => {
    const isDark = document.documentElement.classList.contains("dark");
    return isDark ? "#62d2d9" : "#0f8f95";
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.24) * 0.12 + pointer.y * 0.08;
    meshRef.current.rotation.y = clock.elapsedTime * 0.08 + pointer.x * 0.12;
  });

  return (
    <mesh ref={meshRef} position={[1.45, -0.2, -2.2]} scale={[2.8, 2.8, 2.8]}>
      <icosahedronGeometry args={[1, 4]} />
      <meshStandardMaterial color={color} wireframe transparent opacity={0.16} roughness={0.7} />
    </mesh>
  );
}

export function AmbientBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[3, 4, 5]} intensity={1.2} />
        <AmbientForm />
      </Canvas>
    </div>
  );
}
