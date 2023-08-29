import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    counter: 0,
  },
  reducers: {
    addCounter: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    decreaseCounter: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

export const { addCounter, decreaseCounter } = counterSlice.actions;
export default counterSlice.reducer;
