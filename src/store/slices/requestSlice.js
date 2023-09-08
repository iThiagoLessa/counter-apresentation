import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// função para buscar a lista de pokemons
export async function getPokems() {
  const pokemons = [];
  for (let i = 1; i <= 5; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

    await axios.get(url).then((response) =>
      pokemons.push({
        name: response.data.name,
        image: response.data.sprites["front_default"],
        type: response.data.types.map((type) => type.type.name).join(", "),
        id: response.data.id,
      })
    );
  }

  return pokemons;
}

// asyn para buuscar a lista de pokemons e popular no estado
const fetchPokemons = createAsyncThunk("fetchPokemons", async () => {
  try {
    return await getPokems();
  } catch (error) {
    console.log("erro");
  }
});

const requestSlice = createSlice({
  name: "requestSlice",
  initialState: {
    pokemons: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemons = action.payload;
    });
  },
});

export default requestSlice.reducer;
export { fetchPokemons };
