import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import{ AuthorWrap} from './searchStyle'
export default class Article extends Component {
  constructor(props){
    super(props)
    this.state={
      authorList:this.props.location.state.authorList
   }
  }
  handleReturn=()=>{
    let{history} =this.props
    history.goBack()
  }
  handleAuthor=()=>{
    let{history} =this.props
    history.push('Dynamicdetail')
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
            {this.state.authorList.map(item=>{
              return(
                <div className="author-card" onClick={this.handleAuthor} key={item.userId}>
                  <div className="author-head" style={
                  {background:`url(${item.userinfoPhoto}) center center /  .4rem .4rem no-repeat`}}
                  ></div>
                  <div className="author-info">
                    <div className="author-name">{item.userName}</div>
                    <div className="author-introduce">这个人还没有想好怎么介绍自己</div>
                  </div>
                  <div className="follow-bn">+关注</div>
                </div>
              )
            })}
          </div>
      </AuthorWrap>
    )
  }
}
