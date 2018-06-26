import React, {Component} from 'react';
import {createForm} from "rc-form";
import { fail } from '@/utils/toastUtils';

import PropTypes from 'prop-types';

import {Button, List, InputItem} from 'antd-mobile';

class ValidateForm extends Component {

  constructor(props) {
    super(props);


    const error = {};

    this.state = {
      error,
      //这里初始化一下默认的disabled
      disabled: false
    };
  }




  onErrorClick = (field) => {
    const {error} = this.state;
    const message = error[field];
    fail(message);
  };

  validate = (fn) => {
    this.props.form.validateFields((error, value) => {

      //但是现在有个问题，因为这个方法onChange也会调用，会导致自动触发回调对吧。所以还是拆开写，或者写个回调

      if(!error && fn){//如果是按钮点击的，就传入这个函数就好啦，但是明显执行是需要满足error为null的
        fn(value);
        return;
      }

      // 不是 如果该对象是null 则 error = false 但是只是等同false
      // 如果不这么写 那disabled = null;
      // 这么写了 disabled = false
      const newError = {};
      for(let key in error) {
        newError[key] = error[key].errors[0].message ;
      }
      this.setState({
        error: newError,
        disabled: !!error, //因为我们通过submit方法来触发的，所以他没有这行代码，不会变灰，复制过去就好
      });


      // 那么，如果error为空，代表按钮可以点击， 那点击的时候，可以触发外面传进来的方法
    });
  };

  //这样子就还是只用改一个地方的代码了，对吧
  submit = () => {
    this.validate((value)=>{//既做校验又提交，所以传回调函数
      const { onSubmit } = this.props;
      onSubmit(value);
    });
  };

  inputChange = () => {
    this.validate(); //只做校验不提交，所以不传回调函数
  };


  render() {

    const { error, disabled } = this.state;

    const { buttonParams, inputParams, form, className } = this.props;

    const { getFieldProps } = form;

    //因为之前是在这里判断的，等会我想想

    return (
      <List className={className}>
        {
          inputParams.map((v,key)=>{

            let hasError = false;
            if(error[v.field]){
              hasError = true;
            }

            return (<InputItem
              key={key}
              className={v.className}
              {...getFieldProps(v.field,{
                //不过rcform他是把onChange在这个位置写的
                onChange: this.inputChange,
                rules: v.rules
                //有的时候我们可能不仅仅是为空提示，比如说密码长度在4-6位之间的提示，所以我们把这个变量放到外面去
              })}
              placeholder={v.placeholder}
              clear={v.clear}
              error={hasError}
              onErrorClick={()=>{this.onErrorClick(v.field)}}
            >
              {v.label}
            </InputItem>);
          })

        }
          <Button disabled={disabled} type={buttonParams.type} onClick={this.submit} className={buttonParams.className}>{buttonParams.label}</Button>
      </List>
    );
  }
}

ValidateForm.propTypes = {};

export default createForm()(ValidateForm);
