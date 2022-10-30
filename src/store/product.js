import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import camelcaseKeys from "camelcase-keys";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const res = await fetch("data/products.json");
  return res.json();
});

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: []
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.products = camelcaseKeys(payload);
    },
    [fetchProducts.rejected]: (state) => {
      state.loading = false;
    }
  }
});

export default productsSlice.reducer;
