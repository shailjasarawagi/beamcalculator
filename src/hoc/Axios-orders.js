import axios from 'axios';

const instance = axios.create({
  // baseURL:process.env.REACT_APP_BACKEND_URL;
     baseURL:' http://192.168.0.33:8000/'
});

export default instance;