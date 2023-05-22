import { craftyApi } from "./craftyApi";

/**
 *@description En este archivo se definen las funciones que se encargan de realizar las peticiones a la API de Crafty relacionadas con la entidad Order.
    * @param {*} filter
    * @returns
    *  
 */

export const getOrders = async (filter) =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'order/index',
        query: filter
    });

    return response.data;
}