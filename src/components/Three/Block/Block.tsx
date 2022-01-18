import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useMemo, useRef } from "react";
import { Vector3 } from "types";
import { BlockType } from "types/block";
import { BlockLoader } from "types/loaders";
import { vector3toArray } from "utils/three";

interface BlockProps {
  id: string;
  position: Vector3;
  rotation: Vector3;
  type: BlockType;
}

export default function Block({ id, position, rotation, type }: BlockProps): JSX.Element {
  const ref = useRef<THREE.Object3D>();

  const modelPath = BlockLoader.getModelPath(type);
  const { scene } = useGLTF(modelPath);
  const copiedScene = useMemo(() => scene.clone(), [scene]);

  return (
    <Suspense fallback={null}>
      <mesh position={vector3toArray(position)} rotation={vector3toArray(rotation)} ref={ref}>
        <primitive object={copiedScene} />
      </mesh>
    </Suspense>
  );
}
