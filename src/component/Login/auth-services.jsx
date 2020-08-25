import axios from "axios"

const api = 'http://localhost:3010'

const Signin = (email, password) => {
    console.log('body', JSON.stringify(email, password))
    return axios.post(api + '/api/v1/login', {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          console.log(response.data)
          localStorage.setItem("users", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("users");
  };

  export default {Signin,
    logout}