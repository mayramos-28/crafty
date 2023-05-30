import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getOrders, createOrder as createOrderApi, updateOrder as updateOrderApi  } from "../../api/OrderApi";

export const fetchOrder = createAsyncThunk(
    'product/fetchOrder',
    async (filter) => getOrders(filter)
);

export const createOrder = createAsyncThunk(
    'product/createOrder',
    async (order) => await createOrderApi(order)
);

export const updateOrder = createAsyncThunk(
    'product/update',
    async (order, {state}) => await updateOrderApi(order, {state})

);
const OrderAdapter = createEntityAdapter({});
export const OrderSlice = createSlice({
    name: 'order',
    initialState: OrderAdapter.getInitialState({
        loading: false,
        error: null,
        sucess: null
    }),
    reducers: {},
    extraReducers: {
        [fetchOrder.pending]: (state, action) => {
            state.loading = true;
            return state;
        }
        ,
        [fetchOrder.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.sucess = true;
            OrderAdapter.setAll(state, action.payload);
            return state;
        },
        [fetchOrder.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }
        ,
        [createOrder.pending]: (state, action) => {
            state.loading = true;
            return state;
        }
        ,
        [createOrder.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.sucess = true;
            OrderAdapter.addOne(state, action.payload);
            return state;
        }
        ,
        [createOrder.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [updateOrder.pending]: (state, action) => {
            state.loading = true;
            return state;
        }
        ,
        [updateOrder.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            state.sucess = true;
            OrderAdapter.upsertOne(state, action.payload);
            return state;
        },
        [updateOrder.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }
    },

});

export const { selectAll: selectAllOrder } = OrderAdapter.getSelectors(state => state.order);
export const selectOrderError = state => state.order.error;
export const selectOrderLoading = state => state.order.loading;
export const selectOrderSucess = state => state.order.sucess;
export const OrderReducer = OrderSlice.reducer;
