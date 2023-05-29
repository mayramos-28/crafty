import { craftyApi } from "./craftyApi";

/**
 *@description En este archivo se definen las funciones que se encargan de realizar las peticiones a la API de Crafty relacionadas con la entidad Order.
    * @param {*} filter
    * @returns
    *  
 */

export const createOrder = async (order) =>{
    const response = await craftyApi({
        method: 'POST',
        uri: 'order/store',
        body: order
    });
    return response.data;
};


export const getOrders = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'order/index',
        query: filter
    });

    return response.data;
}

export const updateState = async ({order, state}) =>{
    const response = await craftyApi({
        method: 'PUT',
        uri: `order/updateState/${order.id}`,        
        body: {state}
    });
    return response.data;

}
