import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice.ts";
import cartSlice from "./slices/cartSlice.ts";

const reducer = combineReducers({
  products: productSlice,
  cart: cartSlice,
});

const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
