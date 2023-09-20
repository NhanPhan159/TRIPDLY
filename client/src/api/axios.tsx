import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
});
axiosInstance.defaults.headers.common['Authorization'] = localStorage.getItem("accessToken");
export default axiosInstance