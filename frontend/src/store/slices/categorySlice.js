
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../api/categoryApi';
/**
 * 
 * @description La funcion fetchCategories recibe el vaor de la función createAsyncThunk de Redux-Toolkit que recibe
 * como parametros el nombre de la acción  'category/fetchCategories'  y una función asincrona que recibe como parametro los datos del usuario que se va a registrar
 * ejecuta la funcion  'getCategories()' con los datos del usuario a registrar para enviar una peticion HTTP al servidor y retorna los datos del usuario que se va a registrar. 
 * Con la funcion categotyAdapter se podrá acceder al estado de category. Con los metodos de 'createEntityAdaptar()' como setAll se actualiza el estado de la entidad category con los datos de las categorias que se han obtenido del servidor, con 
 * addOne puede añadirse una categoria al estado de la entidad category y con selectAll se puede acceder a todas las categorias del estado de la entidad category.
 * @param {Object} registerData
 * @returns {Object} data
 * 
 */

const categoryAdapter = createEntityAdapter({});

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async () => await getCategories()
);
export const createCategory = createAsyncThunk(
    'category/createCategory',
    async (categoryData) => null
);
/**
 * @description La funcion CategorySlice recibe el vaor de la función createSlice de Redux-Toolkit que recibe como parametros el nombre de la acción  'category'  
 * el estado inicial de la entidad category y en esta version el unico reduccer qyue se va a utilizar asi como los extrareducers.
 */
const CategorySlice = createSlice({
    name: 'category',
    initialState: categoryAdapter.getInitialState({
        loading: false,
        error: null,
    }),
    reducers: {
        addCategory: categoryAdapter.addOne,
    },
    extraReducers: {
        [fetchCategories.pending]: (state, action) => {
            state.loading = true;
            return state;
        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
            categoryAdapter.setAll(state, action.payload);
            return state;

        },
        [fetchCategories.rejected]: (state, action) => {
            state.loading = false
            state.error = action.error.message
            return state;
        },
        [createCategory.fulfilled]: categoryAdapter.addOne,
    }
});

export const {
    selectAll: selectAllCategories,
} = categoryAdapter.getSelectors(state => state.category);
export const selectCategoryError = state => state.category.error;
export const selectCategoryLoading = state => state.category.loading;
// export * from CategorySlice.actions;
export const CategoryReducer = CategorySlice.reducer;