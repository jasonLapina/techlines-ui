import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice.ts";

const reducer = combineReducers({
  products: productSlice,
});

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
