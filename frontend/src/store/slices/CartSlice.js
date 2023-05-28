import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getShoppingCart, updateShoppingCart as updateShoppingCartApi, createShoppingCart as createShoppingCartApi } from "../../api/shoppingCartApi";

/**
 * @description Este slice está asociado al carrito de la aplicación web Crafty y recibe como estado inicial un objeto con las propiedades cart_items, total y counter. En estas propiedades se almacena el estado del carrito
 * cart_items: array que almacena los productos que se añaden al carrito
 * total: almacena el precio total de los productos que se añaden al carrito
 * counter: almacena el número de productos que se añaden al carrito
 * 
 * 
 * @param {Object} name
 * @param {Object} initialState
 * @param {Object} reducers
 * @param {Object} extraReducers
 * @returns {Object}
 */

export const fetchShoppingCart = createAsyncThunk(
    'shoppingCart/fetchShoppingCart',
    async (_, { getState }) => {
        const userId = getState().authUser.authUser.user.id;
        return await getShoppingCart({ userId });
    }
);

export const addItemToCart = createAsyncThunk(
    'shoppingCart/addItemToCart',
    async (item, { getState }) => {
        const { cart } = getState().cart;
        debugger
        const userId = getState().authUser.authUser.user.id;
        let indexItemToCart = (cart.cart_items || []).findIndex(i => i.productId === item.productId);

        const itemToCart = indexItemToCart !== -1
            ? {...cart.cart_items[indexItemToCart]}
            : { ...item, quantity: 0 };

        itemToCart.quantity++;

        const newCartItems = [...cart.cart_items || []];
        newCartItems[indexItemToCart === -1 ? 0 : indexItemToCart] = itemToCart;
        const cartUpdated = { ...cart, userId, cart_items: newCartItems }
        return await updateShoppingCartApi(cartUpdated);
    });

export const removeItemFromCart = createAsyncThunk(
    'shoppingCart/removeItemFromCart',
    async (item, { getState }) => {
        const { cart } = getState().cart;
        const userId = getState().authUser.authUser.user.id;
        let indexItemToCart = (cart.cart_items || []).findIndex(i => i.productId === item.productId);

        const itemToCart = indexItemToCart !== -1
            ? {...cart.cart_items[indexItemToCart]}
            : { ...item, quantity: 0 };

        itemToCart.quantity--;

        const newCartItems = [...cart.cart_items || []];
        newCartItems[indexItemToCart === -1 ? 0 : indexItemToCart] = itemToCart;
        const cartUpdated = { ...cart, userId, cart_items: newCartItems }
        return await updateShoppingCartApi(cartUpdated);
    }
);
        
export const createShoppingCart = createAsyncThunk(
    'shoppingCart/createShoppingCart',
    async (filter) => createShoppingCartApi(filter)
);


export const CartSlice = createSlice({
    name: 'cartShopping',
    initialState: {
        loading: false,
        error: null,
        cart: {
            cart_items: []
        },
        counter: 0,
    },
    reducers: {
    },
    extraReducers: {
        [fetchShoppingCart.pending]: (state, action) => {
            state.loading = true;
        },
        [fetchShoppingCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            state.counter = action.payload.cart_items.reduce((previous, item) => previous + item.quantity, 0);
        },
        [fetchShoppingCart.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [addItemToCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            state.counter = action.payload.cart_items.reduce((previous, item) => previous + item.quantity, 0);
        },
        [removeItemFromCart.fulfilled]: (state, action) => {
            state.loading = false;
            state.cart = action.payload;
            state.counter = action.payload.cart_items.reduce((previous, item) => previous + item.quantity, 0);
        }
    }
});
