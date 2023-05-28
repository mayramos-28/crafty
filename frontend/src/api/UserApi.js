
import { craftyApi } from "./craftyApi";

  export const updateUser = async(user) => {
    const response = await craftyApi({
        method: 'PUT',
        uri: `user/update/${user.id}`,
        body: user
    });
    return response.data;
} 

