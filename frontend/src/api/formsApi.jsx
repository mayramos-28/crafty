import { craftyApi } from "./craftyApi";

export const registerUserApi = async (Registerdata) => {
  const response = await craftyApi({
    method: 'POST',
    uri: 'auth/register',
    body: Registerdata
  });

  return response.message;
};

export const loginUserApi = async (logindata) => {
  const response = await craftyApi({
    method: 'POST',
    uri: 'auth/login',
    body: logindata
  });

  localStorage.setItem('token', response.token);

  return response.message;
}

export const getAuthUsers = async () => {
  const response = await craftyApi({
    method: 'GET',
    uri: 'auth/user'
  });

  return response;
}


    // 'Authorization': `Bearer ${localStorage.getItem('token')}`,