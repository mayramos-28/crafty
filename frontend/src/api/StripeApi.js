import { craftyApi } from "./craftyApi";

export const CreatePaymentIntent = async (filter) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'stripe/payment',
        body: filter
    });

    return response.data;
};

export const sendPaymentIntent = async (filter) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'stripe/payment/process',
        body: filter
    });

    return response.data;
};