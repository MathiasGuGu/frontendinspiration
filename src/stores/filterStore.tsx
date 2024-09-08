import { create } from "zustand";

type FilterStore = {
  filter: number | undefined;
  type: "all" | "liked";
  setFilter: (filter: number | undefined) => void;
  setType: (type: "all" | "liked") => void;
};

export const useFilterStore = create<FilterStore>((set) => ({
  filter: undefined,
  type: "all",
  setFilter: (filter: number | undefined) => set({ filter }),
  setType: (type: "all" | "liked") => set({ type }),
}));
