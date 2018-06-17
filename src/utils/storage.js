export const auth = {
    type :'session',
    key :'authenticate'
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
        localStorage.getItem(key);

    }else {
        sessionStorage.getItem(key);
    }
};