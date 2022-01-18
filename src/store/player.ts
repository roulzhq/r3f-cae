import create, { SetState, GetState } from "zustand";
import produce from "immer";

import { MovementDirection } from "types/player";
import { Vector3 } from "types";

const INVENTORY_SIZE = 32;

interface PlayerStore {
  position: Vector3;
  rotation: Vector3;
  movement: Record<MovementDirection, boolean>;
  velocity: Vector3;
  mass: number;
  inventory: string[];
  setRotation: (x?: number, y?: number, z?: number) => void;
  setPosition: (x?: number, y?: number, z?: number) => void;
  setMovement: (direction: MovementDirection, value: boolean) => void;
  setVelocity: (x?: number, y?: number, z?: number) => void;
}

export const usePlayerStore = create<PlayerStore>((set: SetState<PlayerStore>, get: GetState<PlayerStore>) => ({
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
  movement: { forward: false, left: false, backward: false, right: false },
  velocity: { x: 0, y: 0, z: 0 },
  mass: 100,
  inventory: ["bb3478dc-1a1e-44e6-b5a8-e2a59613ee56"],
  setPosition(x, y, z) {
    set(
      produce((state) => ({
        position: {
          x: x ?? state.position.x,
          y: y ?? state.position.y,
          z: z ?? state.position.z,
        },
      }))
    );
  },
  setRotation(x, y, z) {
    const rotation = get().rotation;

    set((state) =>
      produce(state, (draft) => {
        draft.rotation.x = x ?? rotation.x;
        draft.rotation.y = y ?? rotation.y;
        draft.rotation.z = z ?? rotation.z;
      })
    );
  },
  setMovement: (direction, value) => {
    if (get().movement[direction] === value) return;

    set((state) =>
      produce(state, (draft) => {
        draft.movement[direction] = value;
      })
    );
  },
  setVelocity: (x, y, z) => {
    const velocity = get().velocity;

    velocity.x = x ?? velocity.x;
    velocity.y = y ?? velocity.y;
    velocity.z = z ?? velocity.z;

    set((state) =>
      produce(state, (draft) => {
        draft.velocity = velocity;
      })
    );
  },
}));
