// VendedorSlice.js

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createSeller, updateSeller as updateSellerApi, showSeller as showSellerApi } from "../../api/SellerApi";

export const addSeller = createAsyncThunk(
  'seller/addSeller',
  async (sellerData) =>createSeller(sellerData)
   
 
);

export const updateSeller = createAsyncThunk(
  'seller/updateSeller',
  async (sellerData) => await updateSellerApi(sellerData)
  

);

export const showSeller= createAsyncThunk(
  'seller/showSeller',
  async (sellerId) =>  await showSellerApi(sellerId)//
    
 
);



export const SellerSlice = createSlice({
  name: 'seller',
  initialState: {
    loading: false,
    error: null,
    success: false,
    seller:{}
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
      })
      .addCase(updateSeller.pending, (state) => {
        state.loading = true;
      }
      )
      .addCase(updateSeller.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.success = true;
      }
      )
      .addCase(updateSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }
      )
      .addCase(showSeller.pending, (state) => {
        state.loading = true;
      })
      .addCase(showSeller.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.success = true;      
        state.seller = action.payload
      })
      .addCase(showSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

    
      ;



  },
});

export const selectSellerLoading = (state) => state.seller.loading;
export const selectSellerError = (state) => state.seller.error;
export const selectSellerSuccess = (state) => state.seller.success;
export const SellerReducer = SellerSlice.reducer;