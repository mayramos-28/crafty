import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getProducts, showProduct, createProduct as createProductApi } from "../../api/productsApi";
/**
 * @description La funcion fetchProducts recibe el vaor de la función createAsyncThunk de Redux-Toolkit que recibe
 * como parametros el nombre de la acción  'product/fetchProducts'  y una función asincrona que recibe como parametro los datos del filtro de busqueda de productos
 * ejecuta la funcion  'getProducts()' con los datos del filtro de busqueda de productos para enviar una peticion HTTP al servidor y retorna los productos.
 * Con la funcion productAdapter se podrá acceder al estado de Product. Con los metodos de 'createEntityAdaptar()' se podrá acceder a los productos o modificarlos.
 *  @param {Object} filter
 * @returns {Object} data
 *  
 * 
 */

export  const starHtml = (points, stars = 5) => {
    const intPoints = Math.round(points);
    const hasHalf = intPoints != points;

    return Array.from({length: stars}).map((star, i) => {
        return (
            <i className={`bi bi-star ${i <= intPoints ? "text-warning" : "black"}`}></i>
        );
    });

  };

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

const productAdapter = createEntityAdapter({});

/**
 * @description La funcion ProductSlice recibe el vaor de la función createSlice de Redux-Toolkit que recibe
 * como parametros el nombre de la entidad  'product'  y el estado inicial de la entidad.
 * con el Thunk fetchProducts se puede acceder a la respuesta de la peticion de forma controlado y sencilla.
 * @param {Object} filter
 */

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