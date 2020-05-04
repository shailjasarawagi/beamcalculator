import axios from 'axios';
import * as functions from '../Functions/Function';

const data = functions.getBackendDomain();
const instance = axios.create(data);

export default instance;