import React, { Component } from 'react'
import { SearchBar } from 'antd-mobile';
import noResult from '@a/img/homepage/noresult.png'
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
  handleEnter=(value)=>{
    let ItemValue=value;
    let articleList= this.props.location.state.articleList
    let authorList=articleList.filter((data)=>{
      return data.author.includes(ItemValue)
    })
    let titleList=articleList.filter((data)=>{
      return data.title.includes(ItemValue)
    })
    
    let {history}=this.props
    // console.log(titleList);
    if(authorList.length===0&&titleList.length===0){
      history.push('/noresult',{ItemValue,authorList,titleList,articleList})
     }else{
      history.push('/result',{ItemValue,authorList,titleList,articleList})
     }
  }
  render() {
    return (
      <div>
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
            width: "3.5rem",
            height: "2.5rem",
            marginLeft:".15rem"
          }} alt=""/>
        </div>
      </div>
    )
  }
}
