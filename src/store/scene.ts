import produce from "immer";
import { Block } from "types/block";
import { Scene } from "types/scene";
import create, { SetState, GetState } from "zustand";

interface SceneStore {
  blocks: Record<string, Block>;
  setScene: (scene: Scene) => void;
  getBlocksAsArray: () => Block[];
}

export const useSceneStore = create<SceneStore>((set: SetState<SceneStore>, get: GetState<SceneStore>) => ({
  blocks: {},
  setScene: (scene: Scene) => {
    set((state) =>
      produce(state, (draft) => {
        draft.blocks = scene.blocks.reduce((acc, block) => {
          acc[block.id] = block;
          return acc;
        }, {} as Record<string, Block>);
      })
    );
  },
  getBlocksAsArray: () => Object.values(get().blocks),
}));
