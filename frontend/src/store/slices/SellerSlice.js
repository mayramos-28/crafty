// VendedorSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSeller } from "../../api/SellerApi";

export const addSeller = createAsyncThunk(
  'seller/addSeller',
  async (sellerData) => {
    const response = await createSeller(sellerData);
    return response.data;
  }
);

export const SellerSlice = createSlice({
  name: 'seller',
  initialState: {
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSeller.pending, (state) => {
        state.loading = true;
      })
      .addCase(addSeller.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      })
      .addCase(addSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectSellerLoading = (state) => state.seller.loading;
export const selectSellerError = (state) => state.seller.error;
export const selectSellerSuccess = (state) => state.seller.success;
export const SellerReducer = SellerSlice.reducer;