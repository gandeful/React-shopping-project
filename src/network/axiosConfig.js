import axios from 'axios';

const instance =axios.create({
    baseURL:'http://hcyapi.szjyxgroup.cn',
    timeout:3000
});
export  default instance;
