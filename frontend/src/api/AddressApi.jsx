import { craftyApi } from "./craftyApi";

export const getAddress = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'address/index',
        query: filter
    });

    return response.data;
}