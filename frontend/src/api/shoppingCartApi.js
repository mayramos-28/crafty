import { craftyApi } from "./craftyApi";

/**
 * @description En este archivo se definen las funciones que se encargan de realizar las peticiones a la API de Crafty relacionadas con la entidad Shopping Cart y sus items relacionados
 * @param {*} filter 
 * @returns 
 */

/**
 * @description La función getShoppingCart se encarga de realizar la petición a la API para obtener el carrito de compras del usuario. \
 * de momento solo los usuarios autenticados pueden tener un carrito de compras. Dbería ser posible que un usuario no autenticado pueda tener un carrito de compras y en futuras implementaciones se hará.
 *  * 
 */
export const getShoppingCart = async(filter) => {
     const response = await craftyApi({
        method: 'GET',
        uri: 'shopping-cart/index',
        query: filter
    });

    return response.data;
    }

export const createShoppingCart = async(filter) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'shopping-cart/store',
        query: filter
    });
    return response.data;
}
export const updateShoppingCart = async(item) => {
    const response = await craftyApi({
        method: 'PUT',
        uri: `shopping-cart/update`,
        body: item
    });
    return response.data;
}    
