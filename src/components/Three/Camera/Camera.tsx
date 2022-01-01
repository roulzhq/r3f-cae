import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import { usePlayerStore } from "store";

const CAMERA_HEIGHT = 10;
const CAMERA_ANGLE = 6;

export default function Camera() {
  const playerPosition = usePlayerStore((state) => state.position);

  const cameraRef = useRef<THREE.Camera>();

  useEffect(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(playerPosition.x, playerPosition.y, playerPosition.z);
    }
  }, [playerPosition]);

  const position: [number, number, number] = useMemo(() => {
    return [playerPosition.x, CAMERA_HEIGHT, playerPosition.z + CAMERA_ANGLE];
  }, [playerPosition]);

  return (
    <PerspectiveCamera makeDefault position={position} ref={cameraRef} onUpdate={(c) => c.updateProjectionMatrix()}>
      <mesh />
    </PerspectiveCamera>
  );
}
