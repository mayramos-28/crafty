import { craftyApi } from "./craftyApi";

export const getSellerAccounts = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'seller-with-drawal-account/index',
        query: filter
    });

    return response.data;
}


export const createAccountSeller = async (newAccountSeller) =>{
    const response = await craftyApi({
        method: 'POST',
        uri: 'seller-with-drawal-account/store',
        body: newAccountSeller
    });

    return response.data;
};