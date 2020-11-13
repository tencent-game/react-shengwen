import React, { Component } from 'react'
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'

import PageHomeUi from '../ui/PageHomeUi'
import { loadDateAsync } from '../actionCreator'


@connect(
  (state)=>{
    // console.log(state.getIn(["home","list"]));
      return{
        list:state.getIn(["home","list"])
      }
  },
  (dispatch)=>({
    loadData(){
      dispatch(loadDateAsync())
    }
  })
)
 class PageHome extends Component {
  render() {
    return (
       <PageHomeUi
        list={this.props.list}
        ></PageHomeUi>
    )
  }
  componentDidMount(){
    this.props.loadData()
  
  }
  componentDidUpdate(){
    // console.log(this.props.list);
  }
}



export default withRouter(PageHome)
