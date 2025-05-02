import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../../types.ts";

const initialState = {
  items: JSON.parse(localStorage.getItem("cart") ?? "[]"),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;

      if (!product) return;

      const existingItem = state.items.find(
        (item: CartItem) => item.product?._id === product._id,
      );
      if (!existingItem) {
        state.items.push({ product, quantity: quantity ?? 1 });
      } else {
        existingItem.quantity += quantity ?? 1;
      }

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // to remove one quantity of the product from cart
    removeOneFromCart: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item: CartItem) => item.product._id === product._id,
      );

      existingItem.quantity--;

      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    // to remove all quantities of the product from cart
    removeProductFromCart: (state, action) => {
      const product = action.payload;

      state.items = state.items.filter(
        (item: CartItem) => item.product._id !== product._id,
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
  },
});

export const {
  addToCart,
  removeOneFromCart,
  removeProductFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
