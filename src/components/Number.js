import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Number extends Component {
    constructor (props){
        super(props);
        this.state = {
            number:0
        }
}
    plus = () =>{
        const { number } =this.state;
        this.setState({
            number:number+1
        })
    }


    minus = () =>{
    const { number } =this.state;
    this.setState({
        number:number-1
    })

   }


    render() {
            const {number} = this.state;
        return (

            <div>
                <span onClick={this.minus}>减</span>
                <span>{number}</span>
                <span onClick={this.plus}>加</span>
            </div>
        );
    }
}

Number.propTypes = {};

export default Number;
