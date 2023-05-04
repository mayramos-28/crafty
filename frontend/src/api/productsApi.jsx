import { craftyApi } from "./craftyApi";


export const getProducts = async(categoryId) => {
     const response = await craftyApi({
        method: 'GET',
        uri: 'product/index',
        query: {categoryId}
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
}