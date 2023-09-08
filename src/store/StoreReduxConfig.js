import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import requestSlice from "./slices/requestSlice";

const rootReducers = combineReducers({
  counterSlice,
  requestSlice,
});

const ReduxStore = configureStore({
  reducer: rootReducers,
});

export default ReduxStore;
