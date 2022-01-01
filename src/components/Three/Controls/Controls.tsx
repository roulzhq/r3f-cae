import { PointerLockControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { usePlayerStore } from "store";
import { vector3toArray } from "utils/three";

export default function Controls() {
  const player = usePlayerStore();

  const ref = useRef<any>();

  useFrame(() => {
    const { position } = player;
    if (ref?.current) {
      const object: THREE.Object3D = ref.current.getObject();

      object.position.set(position.x, position.y, position.z);

      const rotation = object.rotation;

      player.setRotation(0, rotation.y, 0);
    }
  });

  return <PointerLockControls position={vector3toArray(player.position)} rotation={[0, Math.PI, 0]} ref={ref} />;
}
