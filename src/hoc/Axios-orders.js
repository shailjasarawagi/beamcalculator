import axios from 'axios';

const instance = axios.create({
  // baseURL:process.env.REACT_APP_BACKEND_URL;
  baseURL: 'http://aaab2381.ngrok.io/'
});

export default instance;