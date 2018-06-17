import axios from './axiosConfig';
import {Toast} from 'antd-mobile'
//请求前
axios.interceptors.request.use((config)=>{
    Toast.loading('加载中,请稍后');
    return config;
},(error)=>{
    Toast.offline('网络异常')
    return Promise.reject(error);
})
//响应后
axios.interceptors.response.use((response)=>{
    Toast.hide();
    const  {error} = response;
    if(error){
        Toast.fail(error.message);
    }
    return response;
},(error)=>{

    Toast.fail(error.response.data.error.message);
    return Promise.reject(error);
});


const http = (apiMap,parmas) =>{
    const { url,method } = apiMap;

    if(method === 'get'){
    return axios.get(url,{
        parmas
    });
    }else{
        return axios.post(url,parmas)
    }
}
export default http;
