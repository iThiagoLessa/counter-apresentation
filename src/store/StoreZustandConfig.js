import { create } from "zustand";

const initialState = {
  zusCounter: 0,
};

const ZustandStore = create((set) => ({
  ...initialState,
  addZusCounter: () => {
    set((state) => ({ zusCounter: state.zusCounter + 1 }));
  },
}));

export default ZustandStore;
