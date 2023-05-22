import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { craftyFileStoreUrl } from "../../api/FileApi";

/**
 * @description La funcion createFileProduct recibe el vaor de la función createAsyncThunk de Redux-Toolkit que recibe 
 * como parametros el nombre de la acción  'fileProduct/createFileProduct'  y una función asincrona que recibe como parametro los datos del archivo que se va a incorporar a la base de datos
 * ejecuta la funcion  'craftyFileStoreUrl()' con los datos del archivo, en este caso una imagen, para enviar una peticion HTTP al servidor y retorna los de la imagen.
 * Con la funcion FileAdapter se podrá acceder al estado de FileProduct. Con los metodos de 'createEntityAdaptar()' como addOne se añade una imagen al estado de la entidad FileProduct.
 *
 * @param {Object} dataFile
 * @returns {Object} data
 * 
 */

const FileAdapter = createEntityAdapter({});

export const createFileProduct = createAsyncThunk(
    'fileProduct/createFileProduct',
    async (dataFile) =>  craftyFileStoreUrl(dataFile)
);
/**
 * @description La funcion FileProductSlice recibe el vaor de la función createSlice de Redux-Toolkit que recibe como parametros el nombre de la acción  'FileProduct'
 * el estado inicial de la entidad FileProduct y cuenta también con los extrareducers para modificar los datos del estado de la entidad FileProduct.
 */
export const FileProductSlice = createSlice({

    name: 'FileProduct',
    initialState: FileAdapter.getInitialState({
        loading: false,
        error: null,
    })  ,
    reducers: {},
    extraReducers: {
        [createFileProduct.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [createFileProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            FileAdapter.addOne(state, action.payload);
            return state;
        },
        [createFileProduct.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        }
    },
});

export const selectFileProductError = state => state.product.error;
export const selectFileProductLoading = state => state.product.loading;
export const FileProductReducer = FileProductSlice.reducer;