import axios from 'axios';

const instance = axios.create({
  // baseURL:process.env.REACT_APP_BACKEND_URL;
  // baseURL: ' http://192.168.0.22:8000/'
  baseURL: 'http://f0ad37d1.ngrok.io/'
});

export default instance;