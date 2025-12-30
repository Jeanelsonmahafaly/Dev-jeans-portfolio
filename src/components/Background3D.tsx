import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = ({ count = 5000 }) => {
  const ref = useRef<any>();
  
  const [sphere] = useMemo(() => [
    random.inSphere(new Float32Array(count * 3), { radius: 1.5 })
  ], [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#10B981"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const FloatingCubes = () => {
  const meshRef = useRef<any>();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, -2]}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial 
        color="#10B981" 
        transparent 
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
};

const CircuitLines = () => {
  const linesRef = useRef<any>();
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 1 + Math.sin(i * 0.3) * 0.2;
      pts.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius,
        Math.sin(i * 0.1) * 0.1
      ]);
    }
    return pts;
  }, []);

  return (
    <group ref={linesRef}>
      {points.map((point, index) => (
        <mesh key={index} position={point as [number, number, number]}>
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshBasicMaterial color="#10B981" />
        </mesh>
      ))}
    </group>
  );
};

export const Background3D: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars count={3000} />
        <FloatingCubes />
        <CircuitLines />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};

export default Background3D;