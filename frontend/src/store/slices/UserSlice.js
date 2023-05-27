import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserEmail= createAsyncThunk(
    'user/updateUser',
    async (email) => {
        const response = await updateUser(email);
        return response.data;
    }
);

const userAdapter = createEntityAdapter({});

export const UserSlice = createSlice({
    name: 'user',
    initialState: userAdapter.getInitialState({ 
        loading: false,
        error: null,
    }),
    reducers: {},
    extraReducers: {},
});