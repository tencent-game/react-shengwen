import React, { Component } from 'react';
import DynamicDetailHeader from '../UI/DynamicDetailHeader';
import DynamicInfoHeader from '../UI/DynamicInfoHeader';
import DynamicDetailFooter from '../UI/DynamicDetailFooter'
import DynamicDetailComment from '../UI/DynamicDetailComment'
import { connect } from 'react-redux'
import {actionCreater} from '../index'
import { withRouter } from 'react-router-dom';

@connect((state) => {
  return {
    list: state.getIn(["dynamic","dynamicinfo"])
  }
},
(dispatch) => ({
  loadData(dType){
    dispatch(actionCreater.searchDynamicAsync(dType))
  }
}))
@withRouter
class DynamicDetail extends Component {
  
  state={
    type:2,
    list:{}
  }
   componentDidMount(){
    this.props.loadData(this.state.type)
    //  console.log(this.props.match.params.id)
    const id = this.props.match.params.id
    console.log(id)
   const list1 =  (this.props&& this.props.list.filter((value)=>{
      console.log(value.dynamicId)
      return (value.dynamicId==id)
    }))
    console.log(list1)
    this.setState({list:list1[0]})
  }

  componentDidUpdate(){
    console.log(this.props.list)
    if(this.props.list===undefined){
      this.props.loadData(this.state.type)
    }
    
  }
 
  render() {
    return (
      this.state.list&&<div style={{padding:'.1rem'}}>
        <DynamicDetailHeader ></DynamicDetailHeader>
        <DynamicInfoHeader  {...this.state.list}></DynamicInfoHeader>
        <DynamicDetailComment></DynamicDetailComment>
        <DynamicDetailFooter {...this.state.list}></DynamicDetailFooter>
      </div>
    );
  }
}

export default DynamicDetail;