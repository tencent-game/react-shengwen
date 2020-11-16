import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { SearchBar } from 'antd-mobile';
import {SearchWrap} from './searchStyle'
import {connect} from 'react-redux'
import Delete from '@a/img/homepage/delete.png'
import {get} from '@/utils/http.js'
import {DeleteAsync} from '../actionCreator'
@withRouter

@connect(
  (state)=>{
      return{
        list:state.getIn(["searchList","list"])
      }
  },
  (dispatch)=>({
    loadData(){
      dispatch(DeleteAsync())
    }
  })
)
class PageSearchUi extends Component {
  state = {
    value: '搜索文章作者',
    hisList:this.props.list,
    seaList:[
      {content:'A股',id:"11"},
      {content:'花木兰',id:"12"},
      {content:'特立独行',id:"13"},
      {content:'沐浴露',id:"14"},
      {content:'特斯拉',id:"15"},
      {content:'UGD',id:"16"},
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
  handleEnter=async(value)=>{
    let ItemValue =value
    this.setState({value:value});
    // console.log(this.state.value);
    let result= await get (
      '/api/search/content?keyword='+this.state.value
    )
    this.setState({
      hisList:this.state.hisList,
    })
    let authorList=result.data.data.users
    let titleList=result.data.data.articles
  //  console.log(authorList.length);
  //  console.log(titleList);
    let {history}=this.props
    if(authorList.length===0&&titleList.length===0){
      history.push('/noresult',{ItemValue,authorList,titleList})
     }else{
      history.push('/result',{ItemValue,authorList,titleList})
     }
  }
  handleDelete=()=>{
    this.props.loadData()
  }
  handleHistory= async(dataItem)=>{
    let ItemValue=dataItem.target.innerText
    this.setState({value:ItemValue});
    // console.log(this.state.value);
    let result= await get (
      '/api/search/content?keyword='+ItemValue
    )
    this.setState({
      hisList:this.state.hisList,
    })
    console.log(result);
    let authorList=result.data.data.users
    let titleList=result.data.data.articles
  //  console.log(authorList.length);
  //  console.log(titleList);
    let {history}=this.props
    if(authorList.length===0&&titleList.length===0){
      history.push('/noresult',{ItemValue,authorList,titleList})
     }else{
      history.push('/result',{ItemValue,authorList,titleList})
     }
  }
  render() {
    // console.log(this.props.list);
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
                    {dataItem.historyText}
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
