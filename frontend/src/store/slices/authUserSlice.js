import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getAuthUsers } from "../../api/formsApi";


export const fetchAuthUser = createAsyncThunk(
    'authUser/fetchAuthUser',
    async () => await getAuthUsers() 
    );

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
