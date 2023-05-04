import { craftyApi } from "./craftyApi";

const url = 'http://localhost:8080/api/auth';

export const registerUserApi = async (Registerdata) => {

  const response = await fetch(`${url}/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Registerdata)
  });
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.message);
  }

  return data.message;
};

export const loginUserApi = async (logindata) => {
  const response = await fetch(`${url}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(logindata)
  });
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.message);
  }
  localStorage.setItem('token', data.token);

  return data.message;
}

export const getAuthUsers = async () => {
  const response = await fetch(`${url}/user`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'cors' : 'no-cors',
      // 'credentials': 'include'
    }
  });
  const data = await response.json();
  return data;
}


    // 'Authorization': `Bearer ${localStorage.getItem('token')}`,