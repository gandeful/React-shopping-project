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
    renderContent(pageText) {
        return (
            <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
                <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
                <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           hidden: !this.state.hidden,
                       });
                   }}
                >
                    Click to show/hide tab-bar
                </a>
                <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
                   onClick={(e) => {
                       e.preventDefault();
                       this.setState({
                           fullScreen: !this.state.fullScreen,
                       });
                   }}
                >
                    Click to switch fullscreen
                </a>
            </div>
        );
    }


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

          <TabBar
              className={styles.app}
              unselectedTintColor="#949494"
              tintColor="#33A3F4"
              barTintColor="white"
              hidden={this.state.hidden}
          >
              <TabBar.Item
                  title="Life"
                  key="Life"
                  icon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selectedIcon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                  />
                  }
                  selected={this.state.selectedTab === 'blueTab'}
                  badge={1}
                  onPress={() => {
                      this.setState({
                          selectedTab: 'blueTab',
                      });
                  }}
                  data-seed="logId"
              >
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
                  </div>
              </TabBar.Item>
              <TabBar.Item
                  icon={
                      <div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                      />
                  }
                  selectedIcon={
                      <div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                      />
                  }
                  title="Koubei"
                  key="Koubei"
                  badge={'new'}
                  selected={this.state.selectedTab === 'redTab'}
                  onPress={() => {
                      this.setState({
                          selectedTab: 'redTab',
                      });
                  }}
                  data-seed="logId1"
              >
                  {this.renderContent('Koubei')}
              </TabBar.Item>
              <TabBar.Item
                  icon={
                      <div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                      />
                  }
                  selectedIcon={
                      <div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                      />
                  }
                  title="Friend"
                  key="Friend"
                  dot
                  selected={this.state.selectedTab === 'greenTab'}
                  onPress={() => {
                      this.setState({
                          selectedTab: 'greenTab',
                      });
                  }}
              >
                  {this.renderContent('Friend')}
              </TabBar.Item>
              <TabBar.Item
                  icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                  selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                  title="My"
                  key="my"
                  selected={this.state.selectedTab === 'yellowTab'}
                  onPress={() => {
                      this.setState({
                          selectedTab: 'yellowTab',
                      });
                  }}
              >
                  {this.renderContent('My')}
              </TabBar.Item>
          </TabBar>

        
      
      
    );
  }
}

export default Home;
