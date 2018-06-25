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
      error
    };
  }


  submit = () => {
    this.props.form.validateFields((error, value) => {
      const newError = {};
      for(let key in error) {
        newError[key] = error[key].errors[0].message ;
      }
      this.setState({
        error: newError
      });
    });
  };

  onErrorClick = (field) => {
    const {error} = this.state;
    const message = error[field];
    fail(message);
  };

  render() {

    const { error } = this.state;

    const { buttonParams, inputParams, form } = this.props;

    const { getFieldProps } = form;

    const disabled = Object.keys(error) && Object.keys(error).length != 0;


    return (
      <List>
        {
          inputParams.map((v,key)=>{

            let hasError = false;
            if(error[v.field]){
              hasError = true;
            }

            return (<InputItem
              key={key}
              {...getFieldProps(v.field,{
                rules: [{required: true, message: v.name + '为空了'}]
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
        <List.Item>
          <Button disabled={disabled} type={buttonParams.type} onClick={this.submit}>{buttonParams.label}</Button>
        </List.Item>
      </List>
    );
  }
}

ValidateForm.propTypes = {};

export default createForm()(ValidateForm);
