import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import http from '@/network/index';
import {authenticate} from "@/network/apiMap";
import { Toast ,List, InputItem ,Button}  from 'antd-mobile';
import {save ,auth} from '@/utils/storage';
import ValidateForm from '@/components/ValidateForm';
import  SVGIcon  from '@/components/SVGicon';

class Login extends Component {
    request =() =>(
     http(authenticate,{
         usernameOrEmailAddress:'13590491852',
         password:'123456',
         roleId:'1'
     })
         .then((data)=>{
             save(auth,data);
             Toast.success('登录成功',1,()=>{
                 this.props.history.push('/home')
             })
         })
    )
    render(){
        const InputParmas = [
            {
                placeholder: '请输入手机号',
                clear:true,
                label: <SVGIcon iconName='icon-phone1'/>
            },
            {
                placeholder:'请输入密码',
                clear:true,
                label: <SVGIcon iconName='icon-unie65b' />
            },
        ];
        const ButtonParmas = {
            type :'primary',
            onClick:this.request,
            label :'登录'
        };
        const parmas = {
            InputParmas,
            ButtonParmas
        }
        return(
            <div>
                <ValidateForm parmas = {parmas} />
            </div>
        )
    }
    
}

export default withRouter(Login);

