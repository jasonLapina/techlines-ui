import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types.ts";

const initialState = {
  favoritesToggled: true,
  favorites: JSON.parse(localStorage.getItem("favorites") ?? "[]"),
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        (product: Product) => product._id !== action.payload,
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    toggleFavorites: (state) => {
      state.favoritesToggled = !state.favoritesToggled;
    },
  },
});

export const { addToFavorites, removeFromFavorites, toggleFavorites } =
  productSlice.actions;

export default productSlice.reducer;
