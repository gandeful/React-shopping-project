import axios from 'axios';

const instance =axios.create({
    baseURL:'http://hcyapi.szjyxgroup.cn'
});
export  default instance;
