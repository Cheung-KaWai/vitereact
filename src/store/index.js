import create from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export const useGlobaleStore = create((set, get) => ({
  state1: "globale store: value 1",
  state2: "",

  getState1: () => get().state1,

  update: (name, value) => set({ [name]: value }),
}));

// see store in react devtools
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useGlobaleStore);
}
