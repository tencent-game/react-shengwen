import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import PageSearchUi from '../ui/searchPageUi'
import {connect} from 'react-redux'
import { loadDateAsync } from '../actionCreator'
@connect(
  (state)=>{
      // console.log(state.getIn(["searchList","list"]));
      return{
        list:state.getIn(["searchList","list"])
      }
  },
  (dispatch)=>({
    loadData(){
      dispatch(loadDateAsync())
    }
  })
)
 class PageSearch  extends Component {
  render() {
    
    return (
        <PageSearchUi
        list={this.props.list}
        ></PageSearchUi>
    )
  }
  componentDidMount(){
    this.props.loadData()
  
  }
}
export default withRouter(PageSearch)
