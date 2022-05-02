import produce from "immer";
import create, { SetState, GetState } from "zustand";

interface UIStore {
  rows: [number, number, number];
  columns: [number, number, number];
  setRow: (row: number, val: number) => void;
  setColumn: (column: number, val: number) => void;
}

export const useUIStore = create<UIStore>((set: SetState<UIStore>, get: GetState<UIStore>) => ({
  rows: [0.6, 10, 3],
  columns: [2, 10, 2.5],
  setRow: (row, val) =>
    set(
      produce((state: UIStore) => {
        state.rows[row] = val;
        return state;
      })
    ),
  setColumn: (column, val) =>
    set(
      produce((state: UIStore) => {
        state.columns[column] = val;
        return state;
      })
    ),
}));
