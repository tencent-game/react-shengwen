import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import {SearchResultWrap} from './searchStyle'
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
  handleEnter=(value)=>{
    let ItemValue=value;
    let articleList= this.props.location.state.articleList
     this.setState({
      authorList:articleList.filter((data)=>{
        return data.author.includes(ItemValue)
      }),
      // console.log(authorList);
      titleList:articleList.filter((data)=>{
        return data.title.includes(ItemValue)
      })
     })
    let {history}=this.props
    let {authorList,titleList}=this.state
    // console.log(ItemValue);
    // console.log(authorList);
    // console.log(titleList);
    if(authorList.length===0&&titleList.length===0){
      return history.push('/noresult',{ItemValue,authorList,titleList,articleList})
    }else{
      history.push('/result',{ItemValue,authorList,titleList,articleList})
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
    let{history} =this.props
    history.push('/detail')
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
                <div className="author-card" key={item.id} onClick={this.handleDetail}>
              <div className="author-head" style={
              {background:`url(${item.head}) center center /  .4rem .4rem no-repeat`}}
              ></div>
              <div className="author-info">
              <div className="author-name">{item.author}</div>
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
                <div className="article-card" key={data.id} onClick={this.handleDetail}>
                  <div className="article-introduction">{data.title}</div>
                  <div className="article-writer">
                    <div className="article-name">{data.author}</div>
                    <div className="article-time">{data.time}</div>
                  </div>
                  <div className="article-day">2018-12-15</div>
                </div>
              )
            })}
           
          </div>
        </div>
      </SearchResultWrap>
    )
  }
}
