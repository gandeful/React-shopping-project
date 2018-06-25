import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List,Button,InputItem} from 'antd-mobile';
import { createForm } from 'rc-form';


class ValidateForm extends Component {
    submit = () => {
        this.props.form.validateFields((error, value) => {
            console.log(error, value);
        });
    };

    render() {
        const {ButtonParmas,InputParmas} =this.props;
        const { getFieldProps, getFieldError } = this.props.form;
        return (

            <div>
                <List>
                    {
                        InputParmas.map((v,index) => {
                            return <InputItem
                                key={index}
                                {...getFieldProps(v.field, {
                                    onChange(){}, // have to write original onChange here if you need
                                    rules: [{required: true}],
                                })}
                                placeholder={v.placeholder}
                                clear={v.clear}
                            >
                                {v.label}
                            </InputItem>
                        })
                    }
                    {/*parmas.ButtonParmas.onClick*/}
                    <List.Item>
                        <Button type={ButtonParmas.type} onClick={ButtonParmas.onClick}>{ButtonParmas.label}</Button>
                    </List.Item>
                </List>
            </div>
        );
    }
}

ValidateForm.propTypes = {};

export default createForm()(ValidateForm);
