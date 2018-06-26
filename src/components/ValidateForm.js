import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List,Button,InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';
import {fail} from "@/utils/toastUtils";



class ValidateForm extends Component {
    constructor(props){
        super(props);
        const error = {};
        this.state={
            error,
            disabled:false
        };
    }
    validate = (fn) =>{
        this.props.form.validateFields((error, value) => {
            if(!error && fn){
                fn(value);
                return;
            }
            const newError = {};
            for (let key in error){
                newError[key] = error[key].errors[0].message;
            }

            this.setState({
                error:newError,
                disabled:!!error
            })
        });
    }
    submit = () => {
        this.validate((value)=>{
            const {onSumbit}=this.props;
            onSumbit(value);
        });
    };
    onErrorClick = (field)=>{

        const {error} = this.state;
        const message=error[field];
        fail(message)

    }
    inputChange = () =>{
       this.validate();
    }

    render() {
        const { error, disabled } = this.state;
        const {ButtonParmas,InputParmas} =this.props;
        const { getFieldProps} = this.props.form;
        return (

            <div>
                <List>
                    {
                        InputParmas.map((v,index) => {
                            let hasError=false;
                            if(error[v.field]){
                                hasError = true;
                            }
                            return (<InputItem
                                key={index}
                                {...getFieldProps(v.field, {
                                    onChange:this.inputChange,
                                    rules: v.rules
                                })}
                                placeholder={v.placeholder}
                                error = {hasError}
                                clear={v.clear}
                                onErrorClick = {()=>{this.onErrorClick(v.field)}}
                            >
                                {v.label}
                            </InputItem>)
                        })
                    }
                    {/*parmas.ButtonParmas.onClick*/}
                    <List.Item>
                        <Button disabled={disabled} type={ButtonParmas.type} onClick={this.submit}>{ButtonParmas.label}</Button>
                    </List.Item>
                </List>
            </div>
        );
    }
}

ValidateForm.propTypes = {};

export default createForm()(ValidateForm);
