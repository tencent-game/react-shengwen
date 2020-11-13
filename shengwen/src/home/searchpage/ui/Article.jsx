import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import{ ArticleWrap} from './searchStyle'
export default class Article extends Component {
  constructor(props){
    super(props)
    this.state={
      titleList:this.props.location.state.titleList
   }
  }
  handleReturn=()=>{
    let{history} =this.props
    history.goBack()
  }
  handleDetail=()=>{
    let{history} =this.props
    history.push('/detail')
  }
  render() {
    return (
      <ArticleWrap>
        <NavBar
            mode="light"
            icon={<Icon style={
              {background:`url(${Return}) center center /  .2rem .2rem no-repeat`}} />}
            onLeftClick={this.handleReturn}
          >文章</NavBar>
        <div className="article-main">
           {this.state.titleList.map(item=>{
             return(
              <div className="article-card" key={item.id} onClick={this.handleDetail}>
                <div className="article-introduction">{item.title}</div>
                <div className="article-writer">
                  <div className="article-name">{item.author}</div>
                  <div className="article-time">{item.time}</div>
                </div>
                <div className="article-day">2018-12-15</div>
            </div>
             )
           })}  
          </div>
      </ArticleWrap>
    )
  }
}
