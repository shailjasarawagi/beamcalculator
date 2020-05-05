import axios from 'axios';
import * as functions from '../Functions/Function';

const data = functions.getBackendDomain();
const instance = axios.create(data);
// const instance = axios.create({

//     baseURL: 'http://274b90ab.ngrok.io/'
// });
export default instance;