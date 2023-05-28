import { craftyApi } from "./craftyApi";

/**
 * @description En este archivo se definen las funciones que se encargan de realizar las peticiones a la API de Crafty relacionadas con la entidad SellerAccount.
 * @param {*} filter 
 * @returns 
 */

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

export const updateAccountSeller = async (accountSeller) =>{
    const response = await craftyApi({
        method: 'PUT',
        uri: `seller-with-drawal-account/update/${accountSeller.id}`,
        body: accountSeller
    });

    return response.data;
};