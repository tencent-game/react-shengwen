import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SearchBar } from 'antd-mobile';
import {SearchWrap} from './searchStyle'
import Delete from '@a/img/homepage/delete.png'

@withRouter
class PageSearchUi extends Component {
  state = {
    value: '搜索文章作者',
    hisList:[
      {content:'AR',id:"1"},
      {content:'汽车',id:"2"},
      {content:'艺术',id:"3"},
      {content:'技术',id:"4"},
      {content:'大数据',id:"5"},
      {content:'半导体',id:"6"},
      {content:'新浪微博',id:"7"},
    ],
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
    addItem:{content:"",id:""}
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
      let{history} =this.props
      history.goBack()
  }
  handleEnter=(value)=>{
    let pId=this.state.hisList.length+55
    this.state.addItem.content=value;
    this.state.addItem.id=pId
    this.state.hisList.push(this.state.addItem);
    console.log(this.state.hisList);
    this.setState({
      hisList:this.state.hisList,
      addItem:{content:'',id:''}
    })
    let ItemValue=this.state.addItem.content
    let {history}=this.props
    history.push('/result',{ItemValue})
  }
  handleDelete=()=>{
    this.setState({
      hisList:[]
    })
    
  }
  handleHistory=(dataItem)=>{
    console.log(dataItem.id);
    let {history}=this.props
    history.push('/result')
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
               this.state.hisList.map(dataItem=>{
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
