import { craftyApi } from "./craftyApi";

/**
 * @description En este archivo se definen las funciones que se encargan de realizar las peticiones a la API de Crafty relacionadas con la entidad Product.
 * @param {*} filter 
 * @returns 
 */

export const getProducts = async(filter) => {
     const response = await craftyApi({
        method: 'GET',
        uri: 'product/index',
        query: filter
    });

    return response.data;
    }
export const showProduct = async(productId) => {
    const response = await craftyApi({
        method: 'GET',
        uri: `product/show/${productId}`
     
    });

    return response.data;
    }

export const createProduct = async(newProduct) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'product/store',
        body: newProduct
    });
    return response.data;
}
export const updateProduct = async(productId, product) => {
    const response = await craftyApi({
        method: 'PUT',
        uri: `product/update/${productId}`,
        body: product
    });
    return response.data;
}    
export const deleteProduct = async(productId) => {
    const response = await craftyApi({
        method: 'DELETE',
        uri: `product/destroy/${productId}`
    });
    return response.data;
}