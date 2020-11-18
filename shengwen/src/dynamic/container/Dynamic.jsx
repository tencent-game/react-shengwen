import React, {PureComponent } from 'react';
import DynamicUi from '../UI/DynamicUi'
import { connect } from 'react-redux'
import {actionCreater} from '../index'
import { withRouter } from 'react-router-dom';

@connect((state) => {
  // console.log(state.toJS())
  // console.log(state.getIn(["dynamic","dynamicinfo"]))
  return {
    
    list: state.getIn(["dynamic","dynamicinfo"])
  }
},
(dispatch) => ({
  loadData(dType){
    // console.log(dType)
    dispatch(actionCreater.searchDynamicAsync(dType))
  }
}))
@withRouter
class Dynamic extends PureComponent {
  
  state={
    type:2
  }
  
  componentDidMount(){
    // console.log(this.props.location.pathname)
    // this.setState({dType:(window.location.pathname==="/dynamic/follow" ? 1 : 2)}) 
    // console.log(this.data)
    // this.handleLoad()
    this.props.loadData(this.state.type)
  }

  
  // static getDerivedStateFromProps(nextProps, prevState){
  //   console.log(prevState,nextProps)
  //   console.log(window.location.pathname)
  //   return {}
  // }
  // function handleLoad(params) {
    
  //   console.log(this.data);
  //   console.log(window.location.pathname)
  //   this.data.dType=window.location.pathname==='/dynamic/hot' ? 2 :1
    
  // }
  componentDidUpdate(newProps,newState){
    // console.log(this.state.type,newState)
    this.setState({type:(window.location.pathname==='/dynamic/hot' ? 1 :2)})
    if(this.state.type!==newState.type){
      this.props.loadData(newState.type)
    }
    
    // if(this.state.type===newState.type){
    //   
    // console.log(newState)
    // this.props.loadData(newState.type)
    }
    
     
  
  // handleLoad =() => {
  //   // console.log(0)
  //   //   console.log(this.data);
  //   // console.log(window.location.pathname)
  //   // this.data.dType=window.location.pathname==='/dynamic/hot' ? 2 :1
  //   this.setState({type:window.location.pathname==='/dynamic/hot' ? 2 :1},(params) => {
  //     this.props.loadData(this.state.type)
  //   })
  // }
  render() {
    // console.log(this.props)
    // this.props.loadData(this.data.dType)

    return (
     
      <DynamicUi  {...this.props}  >
      </DynamicUi>
    );
  }
}

export default Dynamic;