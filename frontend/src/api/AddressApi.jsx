import { craftyApi } from "./craftyApi";

export const getAddress = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'address/index',
        query: filter
    });

    return response.data;
}
export const createAddress = async (newAddress) =>{
    const response = await craftyApi({
        method: 'POST',
        uri: 'address/store',
        body: newAddress
    });

    return response.data;
};
export const updateAddress = async (addressId, address) =>{
    const response = await craftyApi({
        method: 'PUT',
        uri: `address/update/${addressId}`,
        body: address
    });

    return response.data;
};
export const deleteAddress = async (addressId) =>{
    const response = await craftyApi({
        method: 'DELETE',
        uri: `address/destroy/${addressId}`
    });

    return response.data;
};