const url = 'http://localhost:8080/api/auth';

export const registerUserApi = async(Registerdata) => {
    
    const response = await fetch(`${url}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(Registerdata)
      });
        const data = await response.json();
        
        if(response.status !== 200){
            throw new Error(data.message);
        }

        return data.message;
    };

export const loginUserApi = async(logindata) => {
    const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(logindata)
      });
        const data = await response.json();
        
        if(response.status !== 200){
          throw new Error(data.message);
      }
        return data.message;
    }