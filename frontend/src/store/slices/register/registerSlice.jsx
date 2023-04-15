import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk } from "./registerThunk";


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


  