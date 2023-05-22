import { CRAFTY_BASE_URL, craftyApi } from "./craftyApi";
/**
 * @description En este archivo se definen las funciones que se encargan de realizar las peticiones a la API de Crafty relacionadas con la entidad File.
 * @param {*} filter 
 * @returns 
 */

export const craftyFileUrl = (fileId) => {
    return `${CRAFTY_BASE_URL}/file/print/${fileId}`;
}


export const craftyFileStoreUrl = async(dataFile) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'file/store',
        body: dataFile
    });
    return response.data;

}

