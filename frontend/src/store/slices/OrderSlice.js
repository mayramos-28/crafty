import { createSlice } from "@reduxjs/toolkit";
import { getOrders } from "../../api/OrderApi";

export const fetchOrder = createAsyncThunk(
    'product/fetchOrder',
    async (filter) => getOrders(filter)
);
const OrderAdapter = createEntityAdapter({});
export const OrderSlice = createSlice({
    name: 'order',
    initialState: OrderAdapter.getInitialState({
        loading: false,
        error: null,
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
            OrderAdapter.setAll(state, action.payload);
            return state;
        },
        [fetchOrder.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }
    },

});

export const { selectAll: selectAllOrder } = OrderAdapter.getSelectors(state => state.order);
export const selectOrderError = state => state.order.error;
export const selectOrderLoading = state => state.order.loading;
export const OrderReducer = OrderSlice.reducer;
