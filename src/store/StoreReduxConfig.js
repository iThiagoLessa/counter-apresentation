import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";

const rootReducers = combineReducers({
  counterSlice,
});

const ReduxStore = configureStore({
  reducer: rootReducers,
});

export default ReduxStore;
