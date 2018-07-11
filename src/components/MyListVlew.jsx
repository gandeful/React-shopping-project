import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ListView} from 'antd-mobile';
import http from "../network";

class MyListVlew extends Component {
    constructor(props){
        super(props);
        const dataSource = new ListView.DataSource({
            rowHasChanged:(oldObj,newObj)=>{
                return oldObj!=newObj;
            }
        })
        this.state ={
            dataSource,
            list:[]
        }
    }
    componentDidMount() {
        const { api, params } = this.props;
        const { list, dataSource} = this.state;

        http(api,{
            ...params,
            pageIndex: 1,
            pageSize: 10
        }).then(({items,totalCount})=>{
            const newlist = list.concat(items);
            this.setState({
                dataSource:dataSource.cloneWithRows(newlist),
                list:newlist
            })



        });
    }

    render() {
        const {list,dataSource}=this.state;
        return (
            <div>
                <ListView
                style ={{
                    height:200
                }}
                initialListSize={20}
                dataSource={dataSource}
                renderRow={(item,_,index)=>{
                    console.log(item);
                    return <div>{item.orderNo}</div>
                }}
                />
            </div>
        );
    }
}

MyListVlew.propTypes = {};

export default MyListVlew;
