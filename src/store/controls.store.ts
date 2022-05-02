import create, { SetState, GetState } from "zustand";

type ToolOptions = "translate" | "rotate" | "scale";

interface ControlsStore {
  selectedTool: ToolOptions;
  setSelectedTool: (tool: ToolOptions) => void;
}

export const useControlsStore = create<ControlsStore>((set: SetState<ControlsStore>, get: GetState<ControlsStore>) => ({
  selectedTool: "translate",
  setSelectedTool: (tool: ToolOptions) => set(() => ({ selectedTool: tool })),
}));
