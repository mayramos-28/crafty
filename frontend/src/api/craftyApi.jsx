/**
 * En este archivo se estandariza las llamdas a la PAI por medio de la función craftyApi.
 * 
 */
export const CRAFTY_BASE_URL = 'http://localhost:8080/api';


export const craftyApi = async (
    { method, uri, body, query }
) => {
    const endpoint = `${CRAFTY_BASE_URL}/${uri}` + (query ? `?${new URLSearchParams(query)}` : '');

    const response = await fetch(endpoint, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: typeof body === 'object' ? JSON.stringify(body) : body
    });
    const data = await response.json();
    if (response.status  < 200 || response.status >= 300) {
        throw new Error(data.message);
    }
    return data;
};