import { create } from "zustand";
import { getPokems } from "./slices/requestSlice";

const initialState = {
  zusCounter: 0,
  pokemons: [],
};

const ZustandStore = create((set) => ({
  ...initialState,
  addZusCounter: () => {
    set((state) => ({ zusCounter: state.zusCounter + 1 }));
  },
  getZusPokemon: async () => {
    const pokemonsList = await getPokems();

    set(() => ({ pokemons: pokemonsList }));
  },
}));

export default ZustandStore;
