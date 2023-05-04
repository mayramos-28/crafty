import { configureStore } from "@reduxjs/toolkit";
import { registerUserSlice } from "./slices/register";
import { loginUsersSlice } from "./slices/login";
import { CategoryReducer } from "./slices/categorySlice";
import logger from 'redux-logger'
import { ProductReducer } from "./slices/ProductSlice";
import { authUserSlice } from "./slices/authUserSlice";

export const store = configureStore({
    reducer: {
        register: registerUserSlice.reducer,
        login: loginUsersSlice.reducer,        
        category: CategoryReducer,
        product: ProductReducer,
        authUser: authUserSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});