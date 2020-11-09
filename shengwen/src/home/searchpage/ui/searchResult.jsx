import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import {SearchResultWrap} from './searchStyle'
import head1 from '@a/img/homepage/head1.png'
import head2 from '@a/img/homepage/head2.png'
export default class searchResult extends Component {
  constructor(props){
    super(props)
    this.state={
      title:this.props.location.state.ItemValue
   }
  }
  
  onChange= (value) => {
    this.setState({ value });
  };
  
  handleCancel=()=>{
      let{history} =this.props
      history.goBack()
  }
  handleAuthor=()=>{
    let{history} =this.props
    history.push('/author')
  }
  handleArticle=()=>{
    let{history} =this.props
    history.push('/article')
  }
  render() {
    return (
      <SearchResultWrap>
          <SearchBar
          className="searchBox"
          value={this.state.title}
          placeholder="Search"
          onSubmit={this.handleEnter}
          onCancel={this.handleCancel}
          showCancelButton
          onChange={this.onChange}
        />
        <div className="author-total">
          <div className="author-header">
            <div className="author">作者</div>
            <div className="more" onClick={this.handleAuthor}>更多</div>
          </div>
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
        </div>
        <div className="article-total">
          <div className="article-header">
            <div className="article">文章</div>
            <div className="more" onClick={this.handleArticle}>更多</div>
          </div>
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
        </div>
      </SearchResultWrap>
    )
  }
}
