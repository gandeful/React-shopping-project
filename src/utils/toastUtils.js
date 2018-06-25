import {Toast} from 'antd-mobile';

const ToastTime = 3;
export const success = (text) =>{
    return new Promise( (resolve) =>{
        Toast.success(text,ToastTime,resolve)
    })
};
export const fail = (text) => {
    return new Promise((resolve) =>{
        Toast.fail(text,ToastTime,resolve)
    })
}