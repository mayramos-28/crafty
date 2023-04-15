import { configureStore } from "@reduxjs/toolkit";
import { registerUserSlice } from "./slices/register";
import { loginUsersSlice } from "./slices/login";

export const store = configureStore({
    reducer: {
        register: registerUserSlice.reducer,
        login: loginUsersSlice.reducer,
       
    },
});