import { createSlice } from "@reduxjs/toolkit";
import { getSellerAccounts } from "../../api/SellerAccountApi";

export const fetchSellerAccount = createAsyncThunk(
    'product/fetchSellerAccount',
    async (filter) => getSellerAccounts(filter)
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
    },
});

export const { selectAll: selectAllSellerAccount } = SellerAccountAdapter.getSelectors(state => state.sellerAccount);
export const selectSellerAccountError = state => state.sellerAccount.error;
export const selectSellerAccountLoading = state => state.sellerAccount.loading;
export const SellerAccountReducer = SellerAccountSlice.reducer;