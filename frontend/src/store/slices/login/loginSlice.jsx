import { createSlice } from "@reduxjs/toolkit";
import { loginUserThunk } from "./loginThunk";

export const loginUsersSlice = createSlice({
    name: 'login',
    initialState:{
        isLoading: false,
        error: null,
        success: null,
        user: {
            email: '',
            password: ''
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
          }
    },
    extraReducers:(builder) => {
        builder.addCase(loginUserThunk.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(loginUserThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.success = action.payload;
        });
        builder.addCase(loginUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
});

export const {login, setUser} = loginUsersSlice.actions;