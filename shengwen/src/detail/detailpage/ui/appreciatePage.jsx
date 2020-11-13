import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import {AppreciateWrap} from './PageDetailStyle';
import header1 from '@a/img/detail/header1.png'
import { withRouter } from "react-router-dom"
@withRouter
 class appreciatePage extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      clicked1: 'none',
      clicked2: 'none',
    };
  }
  handleReturn = () => {
    let { history } = this.props
    history.goBack()
  }
  render() {
    return (
      <AppreciateWrap>
        <NavBar
            mode="light"
            icon={<Icon style={
              {background:`url(${Return}) center center /  .2rem .2rem no-repeat`}} />}
            onLeftClick={this.handleReturn}
          >赞赏</NavBar>
          <div className="Appreciate-info">
            <div className="userHeader">
              <img src={header1} alt=""/>
            </div>
            <div className="userName">十点新闻</div>
            <div className="Appreciate-main">一点赞赏更多鼓励</div>
          </div>
          <div className="PaymentAmount">
            <ul>
              <li>￥1</li>
              <li>￥5</li>
              <li>￥10</li>
              <li>￥20</li>
              <li>￥50</li>
              <li>自定义</li>
            </ul>
            <div className="payBn">
              确认支付
            </div>
            <div className="PayMethod">
              <div className="pay-main">使用微信支付,</div>
              <div className="changeBn">更换</div>
            </div>
          </div>
      </AppreciateWrap>
    )
  }
}
export default appreciatePage
