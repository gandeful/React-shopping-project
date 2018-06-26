export const auth = {
    type :'session',
    key :'Authorization'
};
//保存数据
export const save = (obj,value)=>{
    const { type,key } = obj;
    if(type ==='local'){
        localStorage.setItem(key,JSON.stringify(value));

    }else {
        sessionStorage.setItem(key,JSON.stringify(value));
    }
};
//还原数据
export const restore = (obj) => {
    const { type,key } = obj;
    if(type ==='local'){
        return JSON.parse(localStorage.getItem(key));

    }else {
        return JSON.parse(sessionStorage.getItem(key));
    }
};