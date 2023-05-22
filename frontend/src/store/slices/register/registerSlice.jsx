import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk } from "./registerThunk";

/**
 * 
 * @description La función createSlice de Redux-Toolkit, que simplifica la creacion de acciones y reducers, recibe las acciones, el estado inicial y los reducers que tiene asociados. Este slice 
 * está asociado al registro de usuarios en la aplicación web Crafty y recibe como estado inicial un objeto con las propiedades isLoading, success, error y user. En estas propiedades se almacena el estado de la petición HTTP
 * isLoading: indica si la petición HTTP está en curso
 * success: indica si la petición HTTP se ha realizado con éxito
 * error: indica si la petición HTTP ha fallado
 * user: almacena los datos del usuario que se va a registrar
 * 
 * @param {Object} name
 * @param {Object} initialState
 * @param {Object} reducers
 * @returns {Object} registerUserSlice
 *  
 * 
 */

export const registerUserSlice = createSlice({
    name: 'registration',
    initialState:{
        isLoading: false,
        success: null,
        error: null,      
        user: {
            name: '',
            email: '',
            emailConfirm: '',
            password: '',
            passwordConfirm: ''
    }

    },   
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
          }

    },
    extraReducers:(builder) => {
        builder.addCase(registerUserThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(registerUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;            
            state.success = action.payload;
            
        });
        builder.addCase(registerUserThunk.rejected, (state, action) => {
            state.isLoading = false;            
            state.error = action.error.message;
            
        });
    }
    

});

export const {registration, setUser} = registerUserSlice.actions;


  