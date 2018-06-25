import React, { Component } from 'react';
import styles from './styles.less';
import { NavBar, Flex,WhiteSpace,WingBlank ,Grid} from 'antd-mobile';
import { Link } from "react-router-dom";
import { TabBar } from 'antd-mobile';



const renderRow = (key,left,center,right) =>(
  <div key={key}>
<WhiteSpace size="sm" />
<WingBlank size="lg">
  <Flex >
  <Flex.Item>{left}</Flex.Item>
  <Flex.Item  className='text-center'>{center}</Flex.Item>
  <Flex.Item  className='text-right'>{right}</Flex.Item>
</Flex>
</WingBlank>
  </div>
)
const icon = 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png';
const data = [
    {
        icon,
        text:<Link to={'/sale'}>销售</Link>
    },{
        icon,
        text:'采购'
    },{
        icon,
        text:'入库'
    },{
        icon,
        text:'商品管理'
    },{
        icon,
        text:'库存管理'
    },{
        icon,
        text:'报表'
    }
];

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: false,
        };
    };


    onGridItemClick= (el,index) =>{
        console.log(el);
    };
  render() {

    const arr =[
      ['交易时间','交易笔数','交易金额'],
      ['昨日','100','100000'],
      ['今日','100','10000'],
    ]


    return (

      <div className={styles.app}>
      <NavBar
      mode="light"
    >酒店名称</NavBar>
    <WhiteSpace size="lg" />
    <WingBlank size="lg">
    交易汇总
    </WingBlank>
      {
        arr.map((v,i)=>(renderRow(i,...v)))
      }
      <Grid className={styles.grid} data={data} onClick={this.onGridItemClick} activeStyle={false} columnNum={3} />
          <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
              <TabBar
                  unselectedTintColor="black"
                  tintColor="#33A3F4"
                  barTintColor="white"
              >
                  <TabBar.Item
                      title="店铺"
                      key="店铺"
                      icon={<div style={{
                        width:'20px',
                          height:'20px'
                      }}/>}
                      >
                  </TabBar.Item>
                  <TabBar.Item
                      title="采购"
                      key="采购"
                      icon={<div style={{
                          width:'20px',
                          height:'20px'
                      }} /> }
                  >
                  </TabBar.Item>
                  <TabBar.Item
                      title="发现"
                      key="发现"
                      icon={<div style={{
                          width:'20px',
                          height:'20px'
                      }} />}
                  >
                  </TabBar.Item>
                  <TabBar.Item
                      title="购物车"
                      key="购物车"
                      icon={<div style={{
                          width:'20px',
                          height:'20px'
                      }}/>}
                  >
                  </TabBar.Item>
                  <TabBar.Item
                      title="我的"
                      key="我的"
                      icon={<div style={{
                          width:'20px',
                          height:'20px'
                      }}/>}
                  >
                  </TabBar.Item>
              </TabBar>
          </div>

      </div>
        
      
      
    );
  }
}

export default Home;
