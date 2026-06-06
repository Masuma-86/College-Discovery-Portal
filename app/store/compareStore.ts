import { create } from "zustand";

interface CompareStore {
  selectedColleges: any[];
  addCollege: (college: any) => void;
  removeCollege: (id: string) => void;
}

export const useCompareStore = create<CompareStore>((set) => ({
  selectedColleges: [],

  addCollege: (college) =>
    set((state) => {
      const exists = state.selectedColleges.find(
        (c) => c.id === college.id
      );

      if (exists || state.selectedColleges.length >= 3)
        return state;

      return {
        selectedColleges: [
          ...state.selectedColleges,
          college,
        ],
      };
    }),

  removeCollege: (id) =>
    set((state) => ({
      selectedColleges:
        state.selectedColleges.filter(
          (college) => college.id !== id
        ),
    })),
}));