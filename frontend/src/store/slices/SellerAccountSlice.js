import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getSellerAccounts, createAccountSeller as createAccountSellerApi } from "../../api/SellerAccountApi";

export const fetchSellerAccount = createAsyncThunk(
    'product/fetchSellerAccount',
    async (filter) => getSellerAccounts(filter)
);
export const createAccountSeller = createAsyncThunk(
    'product/createAccountSeller',
    async (newAccountSeller) => createAccountSellerApi(newAccountSeller)

);
const SellerAccountAdapter = createEntityAdapter({});
export const SellerAccountSlice = createSlice({
    name: 'sellerAccount',
    initialState: SellerAccountAdapter.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [fetchSellerAccount.pending]: (state, action) => {
            state.loading = true;
            return state;
        }
        ,
        [fetchSellerAccount.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            SellerAccountAdapter.setAll(state, action.payload);
            return state;
        }        ,
        [fetchSellerAccount.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [createAccountSeller.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [createAccountSeller.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            SellerAccountAdapter.addOne(state, action.payload);
            return state;
        },
        [createAccountSeller.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }   
    },
});

export const { selectAll: selectAllSellerAccount } = SellerAccountAdapter.getSelectors(state => state.sellerAccount);
export const selectSellerAccountError = state => state.sellerAccount.error;
export const selectSellerAccountLoading = state => state.sellerAccount.loading;
export const SellerAccountReducer = SellerAccountSlice.reducer;
