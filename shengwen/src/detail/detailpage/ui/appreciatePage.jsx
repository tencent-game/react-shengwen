import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import {AppreciateWrap} from './PageDetailStyle';
import header1 from '@a/img/detail/header1.png'
import {post} from '@/utils/http.js'
import { withRouter } from "react-router-dom"
@withRouter
 class appreciatePage extends Component {
  constructor() {
    super();
    this.state = {
      clicked: 'none',
      PriceList:["￥1","￥5","￥10","￥20","￥50","自定义"],
      price: '',
      active:''
    };
  }
  handleReturn = () => {
    let { history } = this.props
    history.goBack()
  }
  handlePay=()=>{
      
  }
  handleClick= async()=>{
      let result= await post ({
        url:'/api/alipay/order',
        data:{
          "admireMoney": "50",        
          "articleId": 0,
          "toUserId": "2",
          "userId": "string"
        }
      })
      document.write(result)
      this.setState({
        html:result
      })
      console.log(this.state.html);
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
              {this.state.PriceList&&this.state.PriceList.map((item,index)=>{
                return (
                  <li key={index} onClick={this.handlePay}>{item}</li>
                )
              })}
            </ul>
            <div className="payBn" onClick={this.handleClick}>
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
