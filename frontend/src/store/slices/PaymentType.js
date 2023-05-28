import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getPaymentsType, createPaymentType as createPaymentTypeApi, updatePaymentType as updatePaymentTypeApi, deletePaymentType as deletePaymentTypeApi } from "../../api/PaymentsTypeApi";

/**
 * @description La funcion fetchPaymentType recibe el valor de  acción  'product/fetchPaymentType'  y una función asincrona que recibe
 * como parametros el nombre de la entidad  'product'  y el estado inicial de la entidad.
 * con el Thunk fetchPaymentType se puede acceder a la respuesta de la peticion de forma controlado y sencilla.
 * @param {Object} filter
 * 
 */

export const fetchPaymentType = createAsyncThunk(
    'product/fetchPaymentType', async filter => getPaymentsType(filter)
    );
/**
 *@description La funcion createPaymentType recibe el valor de  acción  'product/createPaymentType'  y una función asincrona que recibe
    * como parametros el nombre de la entidad  'product'  y el estado inicial de la entidad.
    * con el Thunk createPaymentType se puede acceder a la respuesta de la peticion de forma controlado y sencilla.
    * @param {Object} filter
    * 
 */
export const createPaymentType = createAsyncThunk(
    'product/createPaymentType',
    async (newPaymentType) =>   createPaymentTypeApi(newPaymentType)
);

/** 
 * @description La funcion updatePaymentType recibe el valor de  acción  'product/updatePaymentType'  y una función asincrona que recibe
 * como parametros el nombre de la entidad  'product'  y el estado inicial de la entidad.
 * con el Thunk updatePaymentType se puede acceder a la respuesta de la peticion de forma controlado y sencilla.
 * @param {Object} filter
*/
export const updatePaymentType = createAsyncThunk(
    'product/updatePaymentType',
    async (paymentType) =>  updatePaymentTypeApi( paymentType)
);

export const deletePaymentType = createAsyncThunk(
    'product/deletePaymentType',
    async (paymentTypeId) =>   deletePaymentTypeApi(paymentTypeId)
);

const PaymentTypeAdapter = createEntityAdapter({});

/**
 * @description La funcion PaymentTypeSlice recibe el valor de la función createSlice de Redux-Toolkit que recibe
 * como parametros el nombre de la entidad  'paymentType'  y el estado inicial de la entidad.
 *  Añáde, elimina y actualiza los datos de la entidad.
 */

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
            PaymentTypeAdapter.updateOne(state, action.payload);
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
export const { selectAll: selectAllPaymentType, updateOne: updateOnePayment } = PaymentTypeAdapter.getSelectors(state => state.paymentType);
export const selectPaymentTypeError = state => state.paymentType.error;
export const selectPaymentTypeLoading = state => state.paymentType.loading;
export const PaymentTypeReducer = PaymentTypeSlice.reducer;
