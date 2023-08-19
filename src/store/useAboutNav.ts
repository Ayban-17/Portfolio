import { create } from "zustand";

export const useAboutNavStore = create((set) => ({
  navOpen: "",
  setNavOpen: (value: string) => {
    set(() => ({
      navOpen: value,
    }));
  },
}));
