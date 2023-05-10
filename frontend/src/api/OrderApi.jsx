import { craftyApi } from "./craftyApi";

export const getOrders = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'order/index',
        query: filter
    });

    return response.data;
}