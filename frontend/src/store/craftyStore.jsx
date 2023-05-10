import { configureStore } from "@reduxjs/toolkit";
import { registerUserSlice } from "./slices/register";
import { loginUsersSlice } from "./slices/login";
import { CategoryReducer } from "./slices/categorySlice";
import logger from 'redux-logger'
import { ProductReducer } from "./slices/ProductSlice";
import { authUserSlice } from "./slices/authUserSlice";
import { AddressReducer } from "./slices/AddressSlice";
import { PaymentTypeReducer } from "./slices/PaymentType";
import { OrderReducer } from "./slices/OrderSlice";
import { SellerAccountReducer } from "./slices/SellerAccountSlice";

export const store = configureStore({
    reducer: {
        register: registerUserSlice.reducer,
        login: loginUsersSlice.reducer,        
        category: CategoryReducer,
        product: ProductReducer,
        authUser: authUserSlice.reducer,
        FileProduct: ProductReducer,
        address: AddressReducer,
        paymentType: PaymentTypeReducer,
        order: OrderReducer,
        sellerAccount:SellerAccountReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
