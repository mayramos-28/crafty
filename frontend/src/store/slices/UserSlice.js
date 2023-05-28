import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {updateUser as updateUserApi} from "../../api/UserApi";

export const updateUser= createAsyncThunk(
    'user/updateUser',
    async (user) => {
        const response = await updateUserApi(user);
        return response.data;
    }
);



export const UserSlice = createSlice({
    name: 'user',
    initialState:{
        name: '',
        email: '',
        loading: false,
        error: null,
    }
    ,
    reducers: {},
    extraReducers: {
        [updateUser.pending]: (state, action) => {
            state.loading = true;
        }
        ,
        [updateUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.error = null;
        }
        ,
        [updateUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    },
});

export const selectUserLoading = (state) => state.user.loading;
export const selectUserError = (state) => state.user.error;
