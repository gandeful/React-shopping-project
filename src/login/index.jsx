import React,{ Component } from 'react';
import {withRouter} from 'react-router-dom';

class Login extends Component {
    goHome =() =>(
        this.props.history.push('/home')
    )
    render(){
        return(
            <div>
                <div onClick={this.goHome}>登录</div>
            </div>
        )
    }
    
}

export default withRouter(Login);
