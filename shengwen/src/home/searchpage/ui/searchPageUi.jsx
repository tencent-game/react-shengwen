import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SearchBar } from 'antd-mobile';
import {SearchWrap} from './searchStyle'
import Delete from '@a/img/homepage/delete.png'

@withRouter
class PageSearchUi extends Component {
  state = {
    value: '搜索文章作者',
    hisList:this.props.list,
    seaList:[
      {content:'A股',id:"11"},
      {content:'大智慧',id:"12"},
      {content:'医疗',id:"13"},
      {content:'沐浴露',id:"14"},
      {content:'特斯拉',id:"15"},
      {content:'朴有天',id:"16"},
      {content:'天长地久',id:"17"},
      {content:'医疗',id:"18"},
    ],
  };
  
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
    //  console.log(this.props);
      let{history} =this.props
      history.goBack()
  }
  handleEnter=(value)=>{
    let ItemValue=value;
    this.state.hisList.push(ItemValue);
    // console.log(this.state.hisList);
    this.setState({
      hisList:this.state.hisList,
    })
    let articleList= this.props.location.state.list
    let authorList=articleList.filter((data)=>{
      return data.author.includes(ItemValue)
    })
    let titleList=articleList.filter((data)=>{
      return data.title.includes(ItemValue)
    })
    // console.log(ItemValue);
    //  console.log(authorList);
    //  console.log(titleList);
    let {history}=this.props
     if(authorList.length===0&&titleList.length===0){
      history.push('/noresult',{ItemValue,authorList,titleList,articleList})
     }else{
      history.push('/result',{ItemValue,authorList,titleList,articleList})
     }
  }
  handleDelete=()=>{
    this.setState({
      hisList:[]
    })
    
  }
  handleHistory=(dataItem)=>{
    let ItemValue=dataItem.target.innerText
    let {history}=this.props
    history.push('/result',{ItemValue})
  }
  render() {
    return (
      <SearchWrap>
        <SearchBar
        className="searchBox"
        value={this.state.value}
        placeholder="Search"
        onSubmit={this.handleEnter}
        onCancel={this.handleCancel}
        showCancelButton
        onChange={this.onChange}
      />
      <div className="historyRecords">
        <div className="his-header">
          <span>历史记录</span>
          <div className="delete-img" style={
          {background:`url(${Delete}) center center /  22px 22px no-repeat`}}
          onClick={this.handleDelete}>
          </div>
        </div>
        <div className="his-main">
          <ul>
            {
               this.props.list&&this.props.list.map((dataItem,index)=>{
                return(
                  <li key={index} onClick={this.handleHistory}>
                    {dataItem}
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      <div className="HotSearch">
          <div className="sea-header">
            <span>热门搜索</span>
          </div>
          <div className="sea-main">
            <ul>
              {
                this.state.seaList.map(dataItem=>{
                  return(
                    <li key={dataItem.id} onClick={this.handleHistory}>
                      {dataItem.content}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </SearchWrap>
    )
  }
}

export default PageSearchUi
