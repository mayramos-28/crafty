import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getProducts, showProduct, createProduct as createProductApi } from "../../api/productsApi";

export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async (filter) =>  getProducts(filter)
);

export const fetchShowProduct = createAsyncThunk(
    'product/fetchOneProduct',
    async (productId) =>  showProduct(productId)
);

export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (newProduct) =>  createProductApi(newProduct)
);

const productAdapter = createEntityAdapter({
    selectId: product => product.id,
});



const ProductSlice = createSlice({
    name: 'product',
    initialState: productAdapter.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: {
        [fetchProducts.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            productAdapter.setAll(state, action.payload);
            return state;
        },
        [fetchProducts.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [fetchShowProduct.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [fetchShowProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            productAdapter.setOne(state, action.payload);
            return state;
        },
        [fetchShowProduct.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [createProduct.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [createProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            productAdapter.addOne(state, action.payload);
            return state;
        },
        [createProduct.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }

    }

});

export const {
    selectAll: selectAllProducts, 
    selectById: selectProductById
    
} = productAdapter.getSelectors(state => state.product);
export const selectProductError = state => state.product.error;
export const selectProductLoading = state => state.product.loading;
export const ProductReducer = ProductSlice.reducer;