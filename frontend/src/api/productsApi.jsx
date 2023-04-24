import { craftyApi } from "./craftyApi";


export const getProducts = async() => {
     const response = await craftyApi({
        method: 'GET',
        uri: 'products/index'
    });

    return response.data;
    }

export const createProduct = async(product) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'products/store',
        body: product
    });
}