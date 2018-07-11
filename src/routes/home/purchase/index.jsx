import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {NavBar,Tabs,WhiteSpace, Badge} from 'antd-mobile';
import MyListVlew from "../../../components/MyListVlew";
import {postShopPurchaseList} from "../../../network/apiMap";


class Purchase extends Component {


    render() {
        const tabs = [
            { title: <Badge >待审核</Badge> },
            { title: <Badge >采购中</Badge> },
            { title: <Badge >配送中</Badge> },
            { title: <Badge >待收货</Badge> },
        ];


        return (
            <div>
                <NavBar
                    mode="dark"
                    rightContent={'申请'}
                >酒店名称</NavBar>
                <Tabs tabs={tabs}
                      initialPage={1}
                      onChange={(tab, index) => { console.log('onChange', index, tab); }}
                      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <MyListVlew
                        api={postShopPurchaseList}
                        params={{
                            orderStatus: 1,
                            shopId: 2
                        }}
                    />
                    <div></div>
                    <div></div>
                    <div></div>
                </Tabs>
                <WhiteSpace />


            </div>
        );
    }
}

Purchase.propTypes = {};

export default Purchase;
