import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import head1 from '@a/img/homepage/head1.png'
import head2 from '@a/img/homepage/head2.png'
import { NavBar, Icon } from 'antd-mobile';
import{ AuthorWrap} from './searchStyle'
export default class Article extends Component {
  handleReturn=()=>{
    let{history} =this.props
    history.goBack()
  }
  render() {
    return (
      <AuthorWrap>
        <NavBar
            mode="light"
            icon={<Icon style={
              {background:`url(${Return}) center center /  .2rem .2rem no-repeat`}} />}
            onLeftClick={this.handleReturn}
          >作者</NavBar>
        <div className="author-main">
            <div className="author-card">
              <div className="author-head" style={
              {background:`url(${head1}) center center /  .4rem .4rem no-repeat`}}
              ></div>
              <div className="author-info">
                <div className="author-name">UGD</div>
                <div className="author-introduce">这个人还没有想好怎么介绍自己</div>
              </div>
              <div className="follow-bn">+关注</div>
            </div>
            <div className="author-card">
              <div className="author-head" style={
              {background:`url(${head2}) center center /  .4rem .4rem no-repeat`}}
              ></div>
              <div className="author-info">
                <div className="author-name">UGD</div>
                <div className="author-introduce">这个人还没有想好怎么介绍自己</div>
              </div>
              <div className="follow-bn">+关注</div>
            </div>
          </div>
      </AuthorWrap>
    )
  }
}
