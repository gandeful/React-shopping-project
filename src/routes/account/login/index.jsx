import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import http from '@/network/index';
import {authenticate} from "@/network/apiMap";
import { Toast ,List, InputItem }  from 'antd-mobile';
import {save ,auth} from '@/utils/storage';
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
        return(
            <div>

                <List>
                    <InputItem clear placeholder = '请输入手机号'>
                        <SVGIcon iconName='icon-phone1'/>
                    </InputItem>
                    <InputItem clear placeholder = '请输入密码' >
                        <SVGIcon iconName='icon-unie65b' />
                    </InputItem>
                </List>
                <div onClick={this.request}>登录</div>
            </div>
        )
    }
    
}

export default withRouter(Login);

