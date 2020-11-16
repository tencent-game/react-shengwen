import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import noResult from '@a/img/homepage/noresult.png'
import {get} from '@/utils/http.js'
import {NorResultWrap} from './searchStyle'
export default class noresult extends Component {
  constructor(props){
    super(props)
    this.state={
      title:this.props.location.state.ItemValue,
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
    this.setState({value:value});
    // console.log(this.state.value);
    let result= await get ({
      url:'/api/search/content?keyword='+this.state.value
    })
    this.setState({
      hisList:this.state.hisList,
    })
    
    let authorList=result.data.data.users
    let titleList=result.data.data.articles
    
    let {history}=this.props
     if(authorList.length===0&&titleList.length===0){
      this.setState({
        title:ItemValue 
      })
     }else{
      history.push('/result',{ItemValue,authorList,titleList})
     }
  }
  render() {
    return (
      <NorResultWrap>
        <SearchBar
          className="searchBox"
          defaultValue={this.state.title}
          placeholder="Search"
          onSubmit={this.handleEnter}
          onCancel={this.handleCancel}
          showCancelButton
          onChange={this.onChange}
        />
        <div>
          <img src={noResult} style={{
            width: "2rem",
            height: "1.5rem",
            marginLeft:".8rem",
          }} alt=""/>
          <div style={{
            fontSize:".1rem",
            marginLeft:".3rem"
          }}>糟糕，没有找到与'{this.state.title}'相关的内容，换个关键词试试吧~</div>
        </div>
      </NorResultWrap>
    )
  }
}
