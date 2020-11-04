import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import{ ArticleWrap} from './searchStyle'
export default class Article extends Component {
  handleReturn=()=>{
    let{history} =this.props
    history.goBack()
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
            <div className="article-card">
              <div className="article-introduction">首届UGD设计大会在京举办，引领增长时代的设计</div>
              <div className="article-writer">
                <div className="article-name">Daisy</div>
                <div className="article-time">10:15</div>
              </div>
              <div className="article-day">2018-12-15</div>
            </div>
            <div className="article-card">
              <div className="article-introduction">首届UGD设计大会在京举办，引领增长时代的设计</div>
              <div className="article-writer">
                <div className="article-name">Daisy</div>
                <div className="article-time">10:15</div>
              </div>
              <div className="article-day">2018-12-15</div>
            </div>
            <div className="article-card">
              <div className="article-introduction">首届UGD设计大会在京举办，引领增长时代的设计</div>
              <div className="article-writer">
                <div className="article-name">Daisy</div>
                <div className="article-time">10:15</div>
              </div>
              <div className="article-day">2018-12-15</div>
            </div>
          </div>
      </ArticleWrap>
    )
  }
}
