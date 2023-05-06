import { CRAFTY_BASE_URL, craftyApi } from "./craftyApi";

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

