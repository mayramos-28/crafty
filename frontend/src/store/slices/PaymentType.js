import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getPaymentsType, createPaymentType as createPaymentTypeApi, updatePaymentType as updatePaymentTypeApi, deletePaymentType as deletePaymentTypeApi } from "../../api/PaymentsTypeApi";

export const fetchPaymentType = createAsyncThunk(
    'product/fetchPaymentType', async filter => getPaymentsType(filter)
    );
export const createPaymentType = createAsyncThunk(
    'product/createPaymentType',
    async (newPaymentType) =>   createPaymentTypeApi(newPaymentType)
);
export const updatePaymentType = createAsyncThunk(
    'product/updatePaymentType',
    async (paymentTypeId, paymentType) =>  updatePaymentTypeApi(paymentTypeId, paymentType)
);
export const deletePaymentType = createAsyncThunk(
    'product/deletePaymentType',
    async (paymentTypeId) =>   deletePaymentTypeApi(paymentTypeId)
);

const PaymentTypeAdapter = createEntityAdapter({});
export const PaymentTypeSlice = createSlice({
    name: 'paymentType',
    initialState: PaymentTypeAdapter.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [fetchPaymentType.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [fetchPaymentType.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            PaymentTypeAdapter.setAll(state, action.payload);
            return state;
        },
        [fetchPaymentType.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [createPaymentType.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [createPaymentType.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            PaymentTypeAdapter.addOne(state, action.payload);
            return state;
        },
        [createPaymentType.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [updatePaymentType.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [updatePaymentType.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            PaymentTypeAdapter.upsertOne(state, action.payload);
            return state;
        },
        [updatePaymentType.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [deletePaymentType.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [deletePaymentType.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            PaymentTypeAdapter.removeOne(state, action.payload);
            return state;
        },
        [deletePaymentType.rejected]: (state, action) => {

            state.loading = false
            state.error = action.error.message
            return state;
        }

    },
});
export const { selectAll: selectAllPaymentType } = PaymentTypeAdapter.getSelectors(state => state.paymentType);
export const selectPaymentTypeError = state => state.paymentType.error;
export const selectPaymentTypeLoading = state => state.paymentType.loading;
export const PaymentTypeReducer = PaymentTypeSlice.reducer;
