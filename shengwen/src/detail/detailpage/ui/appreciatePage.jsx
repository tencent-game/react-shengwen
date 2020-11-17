import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import {AppreciateWrap} from './PageDetailStyle';
import {post} from '@/utils/http.js'
import { withRouter } from "react-router-dom"
@withRouter
 class appreciatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publisher:this.props.location.state.data.publisher,
      clicked: 'none',
      PriceList:["1","5","10","20","50"],
      price: '',
      active:''
    };
  }
  handleReturn = () => {
    let { history } = this.props
    history.goBack()
  }
  handlePay=(index)=>{
    this.setState({
      active:index
    })   
    console.log(this.state.active);
  }
  
  handleClick= async()=>{
      let result= await post ({
        url:'/api/alipay/order',
        data:{
          "admireMoney": this.state.price,        
          "articleId": this.props.location.state.data.article.articleId,
          "toUserId": this.state.publisher.userId,
        }
      })
      document.write(result)
  }
  render() {
    // console.log(this.props.location.state);
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
              <img src={this.state.publisher.userinfoPhoto} alt=""/>
            </div>
            <div className="userName">{this.state.publisher.userName}</div>
            <div className="Appreciate-main">一点赞赏更多鼓励</div>
          </div>
          <div className="PaymentAmount">
            <ul>
              {this.state.PriceList&&this.state.PriceList.map((item,index)=>{
                return (
                  <li key={index} onClick={this.handlePay.bind(this,index)}
                  className={this.state.active === index?" Active":''}
                  >￥{item}</li>
                )
              })}
               <li>自定义</li>
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
