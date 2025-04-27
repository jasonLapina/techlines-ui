import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  products: [],
  product: null,
  pagination: {},
  favoritesToggled: true,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, action) => {
      state.loading = false;
      state.error = null;
      state.products = action.payload;
    },
    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setPagination: (state, action) => {
      state.loading = false;
      state.error = null;
      state.pagination = action.payload;
    },
  },
});

export const { setLoading, setPagination, setError, setProducts } =
  productSlice.actions;

export default productSlice.reducer;

export const productSelector = (state: { productSlice: typeof initialState }) =>
  state.productSlice;
