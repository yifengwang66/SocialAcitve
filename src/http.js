import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081/data';
axios.defaults.timeout = 3000;

axios.interceptors.request.use(config => {
    config.url += '.json';
    return config;
}) 

axios.interceptors.response.use(config => {
    const status = config.status
    if(200 <= status && status < 400){
        return config.data
    }
    throw new Error('requset failed');
})
export default axios;