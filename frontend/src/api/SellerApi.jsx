
import { craftyApi } from "./craftyApi";

  export const createSeller = async(sellerData) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'seller/store',
        body: sellerData
    });
    return response.data;
} 

