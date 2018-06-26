import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {authenticate} from '@/network/apiMap';
import {auth, save} from '@/utils/storage';
import http from '@/network/index';
import SVGIcon from '@/components/SVGIcon';
import ValidateForm from '@/components/ValidateForm';
import {success} from "@/utils/toastUtils";
import Image from "@/components/Image";
import styles from './styles.less';


class Login extends Component {

  login = (value) => {
    //大功告成
    http(authenticate, {
      ...value,//那应用到这里，就是拷贝value上的所有属性，并且添加多一个叫roleid的属性
      roleId: '1'
    })
    .then((data) => {
      save(auth, data);
      return success('登录成功');
    }).then(()=>{
      this.props.history.push('/home')
    });

  };


  render() {

    const inputParams = [
      {
        className: styles.usernameOrEmailAddress,
        name: '账号',
        field: 'usernameOrEmailAddress',
        label: <Image src={"/img/login/user.png"}/>,
        placeholder: "账号",
        clear: true,
        rules:  [
          {required: true, message: '请输入账号'}, //那我们现在判断一下字符串长度，先看看rcform里面怎么做的
          {pattern: /^\w{4,12}$/, message: '账号格式错误'}
        ],
      }, {
        className: styles.password,
        name:'密码',
        field: 'password',
        label: <Image src={"/img/login/pwd.png"}/>,
        placeholder: "密码",
        rules:  [
          {required: true, message: '请输入密码'},
          {pattern: /^\w{4,12}$/, message: '密码格式错误'}
        ],
        clear: true
      }
    ];

    const buttonParams = {
      className: styles.login,
      type: 'primary',
      label: '登录',
      onClick: this.login
    };


    return (
      <div className={styles.wrapper}>
        <Image className={styles.logo} src={"/img/logo.jpg"}/>
        <ValidateForm buttonParams={buttonParams}
                      inputParams={inputParams}
                      className={styles.formWrapper}
                      onSubmit={this.login} />

      </div>
    );
  }
}

export default withRouter(Login);