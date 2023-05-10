import { craftyApi } from "./craftyApi";

export const getPaymentsType = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'payments-type/index',
        query: filter
    });

    return response.data;
}
