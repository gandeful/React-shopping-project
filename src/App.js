import React, { Component } from 'react';
import styles from './App.less';
import { NavBar, Flex,WhiteSpace,WingBlank } from 'antd-mobile';

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
class App extends Component {
  render() {
    const arr =[
      ['交易时间','交易笔数','交易金额'],
      ['昨日','100','100000'],
      ['今日','100','10000']
    ]

    return (
      
      <div>
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
      </div>
        
      
      
    );
  }
}

export default App;
