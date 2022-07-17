import axios from 'axios';

const axiosInstance = axios.create({ baseURL: process.env.DOMAIN_NAME });

export default axiosInstance;
