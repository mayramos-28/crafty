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
import { CartSlice } from "./slices/CartSlice";

/**
 * @description a la funcion store se le esta asignado el vaor de la funcióñ configureStore que está
 * recibiendo un objeto con la propiedad reducer y con los valores de los reducers que se van a utilizar en la aplicación web Crafty.
 * El store permite acceder al estado global del Proyecto, suscribirse a los cambios y despachar acciones para actualizar dicho estado
 * @param {Object} reducer
 * @returns {Object} store
 * @example
 */

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
        sellerAccount:SellerAccountReducer,
        cart: CartSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
