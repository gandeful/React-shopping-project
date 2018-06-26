import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Flex , Grid , WingBlank ,WhiteSpace,NavBar } from 'antd-mobile';
import styles  from './styles.less';

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
        text:'销售'
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

class Shop extends Component {
    
    render() {
        const arr =[
            ['交易时间','交易笔数','交易金额'],
            ['昨日','100','100000'],
            ['今日','100','10000'],
        ]
        return (
            <div>
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
            </div>
        );
    }
}

Shop.propTypes = {};

export default Shop;