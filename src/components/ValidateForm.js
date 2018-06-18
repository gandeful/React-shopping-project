import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List,Button,InputItem} from 'antd-mobile';

class ValidateForm extends Component {
    render() {
        const {parmas} =this.props;
        return (

            <div>
                <List>
                    {
                        parmas.InputParmas.map((v,index) => {
                            return <InputItem
                                index={index}
                                placeholder={v.placeholder}
                                clear={v.clear}
                            >
                                {v.label}
                            </InputItem>
                        })
                    }
                    <List.Item>
                        <Button type={parmas.ButtonParmas.type} onClick={parmas.ButtonParmas.onClick}>{parmas.ButtonParmas.label}</Button>
                    </List.Item>
                </List>
            </div>
        );
    }
}

ValidateForm.propTypes = {};

export default ValidateForm;
