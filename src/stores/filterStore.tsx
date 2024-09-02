import { create } from "zustand";

type FilterStore = {
  filter: number | undefined;
  setFilter: (filter: number | undefined) => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filter: undefined,
  setFilter: (filter: number | undefined) => set({ filter }),
}));
