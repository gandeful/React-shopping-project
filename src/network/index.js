import axios from './axiosConfig';

const httpGet = () =>{

};
const httpPost = () =>{

};
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
