import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getAddress as getAddressApi, createAddress as createAddresApi, updateAddress as updateAddressApi, deleteAddress as deleteAddressApi } from "../../api/AddressApi";

export const fetchAddress = createAsyncThunk(
    'product/fetchAddress',
    async (filter) => getAddressApi(filter)
);
export const createAddress = createAsyncThunk(
    'product/createAddress',
    async (newAddress) => createAddresApi(newAddress)
);
export const updateAddress = createAsyncThunk(
    'product/updateAddress',
    async (address) => updateAddressApi(address)
);
export const deleteAddress = createAsyncThunk(
    'product/deleteAddress',
    async (addressId) => deleteAddressApi(addressId)
);

const AddresAdaptaer = createEntityAdapter({});

export const AddressSlice = createSlice({
    name: 'address',
    initialState: AddresAdaptaer.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {
    },
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
        },
        [createAddress.pending]: (state, action) => {
            state.loading = true;
            return state;
        }
        ,
        [createAddress.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            AddresAdaptaer.addOne(state, action.payload);
            return state;
        }
        ,
        [createAddress.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [updateAddress.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [updateAddress.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            AddresAdaptaer.updateOne(state, action.payload);
            return state;
        }
        ,
        [updateAddress.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }
    },
});

export const { selectAll: selectAllAddress, updateOne: updateOneAddress} = AddresAdaptaer.getSelectors(state => state.address);
export const selectAddressError = state => state.address.error;
export const selectAddressLoading = state => state.address.loading;
export const AddressReducer = AddressSlice.reducer;

