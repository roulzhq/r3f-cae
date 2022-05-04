import produce from "immer";
import { Camera, Mesh, Vector4 } from "three";
import { Vector3 } from "types";
import { Part } from "types/part";
import create, { SetState, GetState } from "zustand";

const DEFAULT_PARTS: Record<string, Part> = {
  "part-01": {
    id: "part-01",
    name: "sphere1",
    type: "sphere",
    position: [0, 0.9, 0],
    rotation: [0, 0, 0],
    scale: [0.5, 0.5, 0.5],
    material: "basic",
    color: "red",
  },
  "part-02": {
    id: "part-02",
    name: "box1",
    type: "box",
    position: [2, 0, 2],
    rotation: [0, 0, 0],
    scale: [0.5, 0.5, 0.5],
    material: "phong",
    color: "red",
  },
  "part-03": {
    id: "part-03",
    name: "box2",
    type: "box",
    position: [4, 4, 0],
    rotation: [2, 0, 0],
    scale: [0.5, 0.5, 0.5],
    material: "phong",
    color: "aqua",
  },
};

interface SceneStore {
  parts: Record<string, Part>;
  cameraRef: React.MutableRefObject<Camera | undefined> | null;
  focus: Vector3;
  setCameraRef: (ref: React.MutableRefObject<Camera | undefined>) => void;
  updatePart: (id: string, part: Partial<Part>) => void;
  setFocus: (focus: Vector3) => void;
}

export const useSceneStore = create<SceneStore>((set: SetState<SceneStore>, get: GetState<SceneStore>) => ({
  parts: DEFAULT_PARTS,
  cameraRef: null,
  focus: [0, 0, 0],
  setCameraRef: (cameraRef) => set(() => ({ cameraRef })),
  updatePart: (id, part) =>
    set(
      produce((state: SceneStore) => {
        state.parts[id] = { ...state.parts[id], ...part };
      })
    ),
  setFocus: (focus) => set(() => ({ focus })),
}));
