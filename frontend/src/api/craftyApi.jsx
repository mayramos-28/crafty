
const url = 'http://localhost:8080/api';


export const craftyApi = async (
    { method, uri, body }
) => { 
    const response = await fetch(`${url}/${uri}`, {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: typeof body === 'object' ? JSON.stringify(body) : body
    });
    const data = await response.json();
    if(response.status !== 200){
        throw new Error(data.message);
    }
    return data;
};