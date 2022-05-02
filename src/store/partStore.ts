import { Mesh } from "three";
import create, { SetState, GetState } from "zustand";

interface PartStore {
  selectedPart: string | null;
  hoveringPart: string | null;
  selectedPartRef: React.MutableRefObject<Mesh> | null;
  setSelectedPart: (id: string | null) => void;
  setHoveringPart: (id: string | null) => void;
  setSelectedPartRef: (ref: React.MutableRefObject<Mesh>) => void;
}

export const usePartStore = create<PartStore>((set: SetState<PartStore>, get: GetState<PartStore>) => ({
  selectedPart: null,
  hoveringPart: null,
  selectedPartRef: null,
  setSelectedPart: (selectedPart) => set(() => ({ selectedPart })),
  setHoveringPart: (hoveringPart) => set(() => ({ hoveringPart })),
  setSelectedPartRef: (selectedPartRef) => set(() => ({ selectedPartRef })),
}));
