import React, { Component } from 'react'
import Return from '@a/img/homepage/Return.png'
import { NavBar, Icon } from 'antd-mobile';
import {FieldWrap} from './PageHomeStyle'
import OddList from './OddList'
import EvenList from './EvenList'
import { withRouter } from "react-router-dom"
@withRouter
class PageField extends Component {
  constructor(props){
    super(props)
    this.state={
       title:this.props.location.state.itemValue,
       FieldList:this.props.location.state.FieldList
    }
  }
   handleReturn=()=>{
     let {history}=this.props
     history.goBack()
   }
   handleDetail=()=>{
    //  console.log(this.state.FieldList);
      let {history}=this.props
       history.push("/detail")
   }
  render() {
    return (
      <FieldWrap>
        <NavBar
            mode="light"
            icon={<Icon style={
              {background:`url(${Return}) center center /  .2rem .2rem no-repeat`}} />}
            onLeftClick={this.handleReturn}
          >{this.state.title}</NavBar>
        {this.state.FieldList&&this.state.FieldList.map((item,index)=>{
            return(
              index % 2 === 0? <EvenList list={item} key={item.id}/>:<OddList key={item.id} list={item}/>
            )
        })}
      </FieldWrap>
    )
  }
}
export default PageField