import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../api/AddressApi";



export const fetchAddress = createAsyncThunk(
    'product/fetchAddress',
    async (filter) =>   getAddress(filter)
);
const AddresAdaptaer = createEntityAdapter({});

export const AddressSlice = createSlice({
    name: 'address',
    initialState: AddresAdaptaer.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [fetchAddress.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [fetchAddress.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            AddresAdaptaer.setAll(state, action.payload);
            return state;
        },
        [fetchAddress.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }


    },
});

export const { selectAll: selectAllAddress } = AddresAdaptaer.getSelectors(state => state.address);
export const selectAddressError = state => state.address.error;
export const selectAddressLoading = state => state.address.loading;
export const AddressReducer = AddressSlice.reducer;