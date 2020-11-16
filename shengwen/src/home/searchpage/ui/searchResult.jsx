import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import {SearchResultWrap} from './searchStyle'
import {get} from '@/utils/http.js'
export default class searchResult extends Component {
  constructor(props){
    super(props)
    this.state={
      title:this.props.location.state.ItemValue,
      titleList:this.props.location.state.titleList,
      authorList:this.props.location.state.authorList
   }
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  handleCancel=()=>{
      let{history} =this.props
      history.goBack()
  }
  handleEnter= async(value)=>{
    let ItemValue =value
    this.setState({
      value:value,
      authorList:[],
      titleList:[]
    });
    
    // console.log(this.state.value);
    let result= await get ({
      url:'/api/search/content?keyword='+this.state.value
    })
    let authorList=result.data.data.users
    let titleList=result.data.data.articles
  //  console.log(titleList);
    let {history}=this.props
     if(authorList.length===0&&titleList.length===0){
      history.push('/noresult',{ItemValue,authorList,titleList})
     }else{
      this.setState({
        value:value,
        authorList:authorList,
        titleList:titleList
      });
     }
  }
  handleAuthor=()=>{
    // console.log(this.state.titleList);
    let{history} =this.props
    let {authorList}=this.state
    history.push('/author',{authorList})
  }
  handleArticle=()=>{
    let{history} =this.props
    let {titleList}=this.state
    history.push('/article',{titleList})
  }
  handleDetail=()=>{
    // let{history} =this.props
    // history.push('/detail')
  }
  render() {
    return (
      <SearchResultWrap>
          <SearchBar
          className="searchBox"
          defaultValue={this.state.title}
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
            {this.state.authorList&&this.state.authorList.map(item=>{
              return(
                <div className="author-card" key={item.userId} onClick={this.handleDetail}>
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
        </div>
        <div className="article-total">
          <div className="article-header">
            <div className="article">文章</div>
            <div className="more" onClick={this.handleArticle}>更多</div>
          </div>
          <div className="article-main">
            {this.state.titleList&&this.state.titleList.map(data=>{
              return(
                <div className="article-card" key={data.articleId} onClick={this.handleDetail}>
                  <div className="article-introduction">{data.articleHeadline}</div>
                  <div className="article-writer">
                    {data.userName}
                  </div>
                  <div className="article-day">{data.articleTime}</div>
                </div>
              )
            })}
           
          </div>
        </div>
      </SearchResultWrap>
    )
  }
}
