
import { craftyApi } from "./craftyApi";

  export const createSeller = async(sellerData) => {
    const response = await craftyApi({
        method: 'POST',
        uri: 'seller/store',
        body: sellerData
    });
    return response.data;
} 

export const updateSeller = async(sellerData) => {
  const response = await craftyApi({
      method: 'PUT',
      uri: `seller/update/${sellerData.id}`,
      body: sellerData
  });
  return response.data;
} 


export const showSeller = async(sellerId) => {
  const response = await craftyApi({
      method: 'GET',
      uri: `seller/show/${sellerId}`
   
  });

  return response.data;
  }

