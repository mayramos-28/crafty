import { createSlice } from "@reduxjs/toolkit";

/**
 * @description Este slice está asociado al carrito de la aplicación web Crafty y recibe como estado inicial un objeto con las propiedades cartItems, total y counter. En estas propiedades se almacena el estado del carrito
 * cartItems: array que almacena los productos que se añaden al carrito
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

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        total: 0,
        counter:0,

    },
    reducers: {
        addToCart: (state, action) => {
            const newProduct = action.payload;
            const index = state.cartItems.findIndex(product => product.productId === newProduct.productId);
            if (index >= 0) {

                state.cartItems[index].qty += newProduct.qty;
            } else {

                state.cartItems.push(newProduct);
            }

            state.total = state.cartItems.reduce((total, product) => total + product.price * product.qty, 0);
            state.counter += newProduct.qty;
        },
        removeFromCart: (state, action) => {
            const item = state.cartItems.find((x) => x.productId === action.payload);
            if (item) {
              state.totalItems -= item.qty; 
              state.cartItems = state.cartItems.filter((x) => x.productId !== action.payload);
              state.total = state.cartItems.reduce((a, c) => a + c.qty * c.price, 0);
            }
        },
        clearCart: (state, action) => {
            state.cartItems = [];
            state.total = 0;
            state.counter = 0;
        },
        loadCartItems: (state, action) => {
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            const total = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
            state.cartItems = cartItems;
            state.total = total;
          },
        
    },
});
export const { addToCart, removeFromCart, clearCart, loadCartItems} = CartSlice.actions;
