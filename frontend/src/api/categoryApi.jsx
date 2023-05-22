import { craftyApi } from "./craftyApi";
/**
 * @description En este archivo se definen las funciones que se encargan de realizar las peticiones a la API de Crafty relacionadas con la entidad Category.
 * @param {*} filter 
 * @returns 
 */
export const getCategories = async () =>{
    const response = await craftyApi({
        method: 'GET',
        uri: 'category/index'
    });

    return response.data;
}