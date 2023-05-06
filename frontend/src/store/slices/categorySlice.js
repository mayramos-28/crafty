
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../api/categoryApi';

const categoryAdapter = createEntityAdapter({});

export const fetchCategories = createAsyncThunk(
    'category/fetchCategories',
    async () => await getCategories()
);
export const createCategory = createAsyncThunk(
    'category/createCategory',
    async (categoryData) => null
);

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