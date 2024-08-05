import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const Model = ({
  url,
  scale,
  position,
  rotation,
}: {
  url: string;
  scale: number;
  position: number[];
  rotation: number[];
}) => {
  const groupeRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);

  useFrame((state) => {
    if (groupeRef.current) {
      groupeRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.6;
      groupeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <group ref={groupeRef}>
      <primitive
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
      />
    </group>
  );
};

const ThreeModel = () => {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
      <ambientLight intensity={3} />
      <Model
        url="/models/scene.gltf"
        scale={2}
        position={[4, 2.5, 1.4]}
        rotation={[0, 0, Math.PI / 6]}
      />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ThreeModel;
