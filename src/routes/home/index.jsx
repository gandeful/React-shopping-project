import React, { Component } from 'react';
import styles from './shop/styles.less';
import {  Route ,withRouter } from "react-router-dom";
import { TabBar } from 'antd-mobile';
import My from './my';
import Purchase from './purchase';
import Shop from './shop';
import ShopCart from './shopcart';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    };


    render() {
        const tabParmas=[
            {
                title:'店铺',
                key:'shop',
                icon:<div style={{
                width: '22px',
                height: '22px',
                background: 'url(/切图/标签栏/店铺未选中@3x.png) center center /  21px 21px no-repeat' }}
            />,
                selectedIcon:<div style={{
                width: '22px',
                height: '22px',
                background: 'url(/切图/标签栏/店铺选中@3x.png) center center /  21px 21px no-repeat' }}
            />,
                component:Shop

            },
            {
                title:'采购',
                key:'purchase',
                icon:<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(/切图/标签栏/采购未选中@3x.png) center center /  21px 21px no-repeat' }}
                />,
                selectedIcon:<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(/切图/标签栏/采购选中@3x.png) center center /  21px 21px no-repeat' }}
                />,
                component:Purchase

            },{
                title:'购物车',
                key:'shopcart',
                icon:<div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(/切图/标签栏/发现未选中@3x.png) center center /  21px 21px no-repeat' }}
                />,
                selectedIcon:  <div style={{
                    width: '22px',
                    height: '22px',
                    background: 'url(/切图/标签栏/发现选中@3x.png) center center /  21px 21px no-repeat' }}
                />,
                component:ShopCart
            },
            {
                title:'我的',
                key:'my',
                icon:{ uri: '/切图/标签栏/我的未选中@3x.png' },
                selectedIcon:{ uri: '/切图/标签栏/我的选中@3x.png' },
                component:My
            },
        ]

    return (

          <TabBar
              className={styles.app}
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
          >
              {
                  tabParmas.map((v)=>{
                      return <TabBar.Item
                          icon={v.icon}
                          selectedIcon={v.selectedIcon}
                          title={v.title}
                          key={v.key}
                          selected={window.location.pathname === `/home/${v.key}`}
                          onPress={() => {
                              this.props.history.push(`/home/${v.key}`)
                          }}
                      >
                          <Route path={`/home/${v.key}`} component={v.component} />
                      </TabBar.Item>
                  })
              }

          </TabBar>


    );
  }
}

export default withRouter(Home);
