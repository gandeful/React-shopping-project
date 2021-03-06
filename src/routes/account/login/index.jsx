import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import http from '@/network/index';
import {authenticate} from "@/network/apiMap";
import {save ,auth} from '@/utils/storage';
import ValidateForm from '@/components/ValidateForm';
import  SVGIcon  from '@/components/SVGicon';
import {success} from "@/utils/toastUtils";
import Number from "@/components/Number";


class Login extends Component {
    login =(value) =>(
     http(authenticate,{
         ...value,
         roleId:'1'
     })
         .then((data)=>{
             save(auth,"Bearer "+data);
             success('登录成功')
         }).then(()=>(
             this.props.history.push('/home/shop')
         )
     )
    )
    render(){
        const InputParmas = [
            {
                //设置表单提交字段
                name:'账号',
                placeholder: '请输入手机号',
                clear:true,
                label: <SVGIcon iconName='icon-phone1'/>,
                field:'usernameOrEmailAddress',
                rules:[
                    {required: true, message: '请输入账号'},
                    {pattern: /^\w{4,12}$/,message:'账号格式错误'}
                ]

            },
            {
                name:'密码',
                placeholder:'请输入密码',
                clear:true,
                label: <SVGIcon iconName='icon-unie65b' />,
                field:'password',
                rules:[
                    {required: true, message: '请输入密码'},
                    {pattern: /^\w{4,12}$/,message:'密码格式错误'}
                ]
            },
        ];
        const ButtonParmas = {
            type :'primary',
            onClick:this.login,
            label :'登录'
        };
        return(
            <div>
                <ValidateForm  ButtonParmas = {ButtonParmas}
                               InputParmas={InputParmas}
                               onSumbit={this.login} />
                <Number />
            </div>
        )
    }
    
}

export default withRouter(Login);

