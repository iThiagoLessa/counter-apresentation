import { create } from "zustand";

const ZustandStore = create((set) => ({
  counter: 0,
  increaseCounter: () => set((state) => ({ bears: state.bears + 1 })),
  decreaseCounter: () => set((state) => ({ bears: state.bears - 1 })),
}));

export default ZustandStore;
