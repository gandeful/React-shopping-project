import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';
import http from '../../network';
import {authenticate} from "../../network/apiMap";

class Login extends Component {
    request =() =>(
     http(authenticate,{
         usernameOrEmailAddress:'13590491852',
         password:'123456',
         roleId:'1'
     })
         .then((data)=>{
             console.log(data);
         })
    )
    render(){
        return(
            <div>
                <div onClick={this.request}>登录</div>
            </div>
        )
    }
    
}

export default withRouter(Login);

