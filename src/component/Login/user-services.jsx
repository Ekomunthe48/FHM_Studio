import axios from "axios";
import authHeader from "./auth-token";

const api = 'http://localhost:3010/'

const getUser = () => {
    return axios.get( api + '/api/v1/rahasia', { headers: authHeader() });
  };

  export default getUser