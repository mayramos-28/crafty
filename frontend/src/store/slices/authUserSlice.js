import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getAuthUsers } from "../../api/formsApi";

/**
 * @description La funcion fetchAuthUser recibe el vaor de la función createAsyncThunk de Redux-Toolkit que recibe como parametros el nombre de la acción  'authUser/fetchAuthUser'  y una función asincrona que recibe
 * como parametros el nombre de la entidad  'product'  y el estado inicial de la entidad.
 * con el Thunk fetchAuthUser se puede acceder a la respuesta de la peticion de forma controlado y sencilla.
 * @param {Object} filter
 * 
 */

export const fetchAuthUser = createAsyncThunk(
    'authUser/fetchAuthUser',
    async () => await getAuthUsers() 
    );
    /**
     * @description La funcion authUserSlice recibe el vaor de la función createSlice de Redux-Toolkit que recibe
     * como parametros el nombre de la entidad  'authUser'  y el estado inicial de la entidad.
     * 
     * @param {Object} filter
     *  
     * 
     */

export const authUserSlice = createSlice({
    name: 'authUser',
    initialState: {
        loading: false,
        error: null,        
        authUser:{           
        }
    },
    reducers: {},
    extraReducers:(builder) => {
        builder.addCase(fetchAuthUser.pending, (state, action) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchAuthUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;           
            state.authUser = action.payload;
        });
        builder.addCase(fetchAuthUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const authUser = authUserSlice.actions;
