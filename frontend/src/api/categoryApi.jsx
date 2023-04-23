import { craftyApi } from "./craftyApi";

export const getCategories = async () =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'category/index'
    });

    return response.data;
}