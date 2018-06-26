import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Flex , Grid , WingBlank ,WhiteSpace,NavBar } from 'antd-mobile';
import styles  from './styles.less';

class My extends Component {
    render() {
        const data=[
            {
                text:'待审核'
            }, {
                text:'待发货'
            }, {
                text:'待收货'
            }, {
                text:'待评价'
            }, {
                text:'退款/退货'
            },
        ]
        return (
            <div>
                <div className={styles.header}>
                    <Flex>
                        <img  className={styles.portrait} src="https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=495160202,103825918&fm=58&bpow=469&bpoh=665" alt=""/>
                        <div>
                            <div>
                                <span>鲁迅</span>
                                <span>CG001</span>
                            </div>

                            <div>
                                <span>君悦大酒店</span>
                            </div>
                        </div>
                    </Flex>
                </div>
                <div className={styles.cardpostion}>
                <div className={styles.cardwraper}>
                    <Flex className={styles.card}>
                        <Flex.Item>
                            <span>我采购订单</span>
                        </Flex.Item>
                        <Flex.Item className='text-right'>
                            <span>查看全部</span>
                        </Flex.Item>

                    </Flex>
                    <div className={styles.apart}>
                        <Grid  data={data} hasLine={false}   columnNum={5} />
                    </div>
                </div>
                </div>
                <div className={styles.content}>
                    <Flex className={styles.card}>
                        <Flex.Item>
                            <span>我采购订单</span>
                        </Flex.Item>
                        <Flex.Item className='text-right'>
                            <span>查看全部</span>
                        </Flex.Item>

                    </Flex>
                    <Flex className={styles.card}>
                        <Flex.Item>
                            <span>我采购订单</span>
                        </Flex.Item>
                        <Flex.Item className='text-right'>
                            <span>查看全部</span>
                        </Flex.Item>

                    </Flex>
                    <Flex className={styles.card}>
                        <Flex.Item>
                            <span>我采购订单</span>
                        </Flex.Item>
                        <Flex.Item className='text-right'>
                            <span>查看全部</span>
                        </Flex.Item>

                    </Flex>
                </div>
            </div>
        );
    }
}

My.propTypes = {};

export default My;
