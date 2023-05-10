import { createSlice } from "@reduxjs/toolkit";
import { getPaymentsType } from "../../api/PaymentsTypeApi";

export const fetchPaymentType = createAsyncThunk(
    'product/fetchPaymentType', async filter => getPaymentsType(filter)
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
        }
    },
});
export const { selectAll: selectAllPaymentType } = PaymentTypeAdapter.getSelectors(state => state.paymentType);
export const selectPaymentTypeError = state => state.paymentType.error;
export const selectPaymentTypeLoading = state => state.paymentType.loading;
export const PaymentTypeReducer = PaymentTypeSlice.reducer;
