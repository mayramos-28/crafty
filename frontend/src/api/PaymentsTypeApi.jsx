import { craftyApi } from "./craftyApi";

export const getPaymentsType = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'payments-type/index',
        query: filter
    });

    return response.data;
}

export const createPaymentType = async (newPaymentType) =>{
    const response = await craftyApi({
        method: 'POST',
        uri: 'payments-type/store',
        body: newPaymentType
    });

    return response.data;
};

export const updatePaymentType = async (paymentTypeId, paymentType) =>{
    const response = await craftyApi({
        method: 'PUT',
        uri: `payments-type/update/${paymentTypeId}`,
        body: paymentType
    });

    return response.data;
};

export const deletePaymentType = async (paymentTypeId) =>{
    const response = await craftyApi({
        method: 'DELETE',
        uri: `payments-type/destroy/${paymentTypeId}`
    });

    return response.data;
};