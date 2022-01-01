import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { usePlayerStore } from "store";
import { MovementDirection } from "types/player";
import { vector3toArray } from "utils/three";
import { useGLTF } from "@react-three/drei";

const keybindings: Record<string, MovementDirection> = {
  KeyW: "forward",
  KeyA: "left",
  KeyS: "backward",
  KeyD: "right",
};

export default function Player(): JSX.Element {
  const { scene } = useGLTF("/assets/textures/players/basicCharacter.gltf");

  const player = usePlayerStore((state) => state);

  console.log(player.position);

  const ref = useRef<THREE.Object3D>();

  const toggleMovement = (keyCode: string, state: boolean) => {
    // Only perform actions if the key pressed has some keybinding attached to it.
    if (keyCode in keybindings) {
      const direction = keybindings[keyCode];

      if (player.movement[direction] !== state) {
        player.setMovement(direction, state);
      }
    }
  };

  const onKeyUp = (event: KeyboardEvent) => {
    toggleMovement(event.code, false);
  };

  const onKeyDown = (event: KeyboardEvent) => {
    toggleMovement(event.code, true);
  };

  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);

  useFrame(() => {
    if (!ref?.current) return;
    // const velX = velocity.x - velocity.x * 10.0;
    // const velZ = velocity.z - velocity.z * 10.0;

    // const velY = velocity.y - velocity.y * 10.0 * mass;

    // // setVelocity(velX, velY, velZ);

    let posX = player.position.x;
    let posZ = player.position.z;

    if (player.movement.forward) posZ -= 0.1;
    if (player.movement.backward) posZ += 0.1;
    if (player.movement.left) posX -= 0.1;
    if (player.movement.right) posX += 0.1;

    if (posX !== player.position.x || posZ !== player.position.z) {
      player.setPosition(posX, undefined, posZ);
    }
  });

  return (
    <mesh
      visible
      position={vector3toArray(player.position)}
      rotation={vector3toArray(player.rotation)}
      ref={ref}
      scale={[0.2, 0.2, 0.2]}
    >
      <primitive object={scene} />
    </mesh>
  );
}
