import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { craftyFileStoreUrl } from "../../api/FileApi";

const FileAdapter = createEntityAdapter({});

export const createFileProduct = createAsyncThunk(
    'fileProduct/createFileProduct',
    async (dataFile) =>  craftyFileStoreUrl(dataFile)
);

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