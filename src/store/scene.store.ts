import produce from "immer";
import { Part } from "types/part";
import create, { SetState, GetState } from "zustand";

const DEFAULT_PARTS: Record<string, Part> = {
  "part-01": {
    id: "part-01",
    name: "sphere1",
    type: "sphere",
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    material: "basic",
    color: "red",
  },
  "part-02": {
    id: "part-02",
    name: "box1",
    type: "box",
    position: [2, 0, 2],
    rotation: [0, 0, 0],
    material: "phong",
    color: "red",
  },
  "part-03": {
    id: "part-03",
    name: "box2",
    type: "box",
    position: [4, 4, 0],
    rotation: [2, 0, 0],
    material: "phong",
    color: "aqua",
  },
};

interface SceneStore {
  parts: Record<string, Part>;
  selectedPart: string | null;
  hoveringPart: string | null;
  setSelectedPart: (id: string) => void;
  setHoveringPart: (id: string) => void;
}

export const useSceneStore = create<SceneStore>((set: SetState<SceneStore>, get: GetState<SceneStore>) => ({
  parts: DEFAULT_PARTS,
  selectedPart: null,
  hoveringPart: null,
  setSelectedPart: (id: string) => set(() => ({ selectedPart: id })),
  setHoveringPart: (id: string) =>
    set((state) => {
      state.hoveringPart = id;
      return state;
    }),
}));
