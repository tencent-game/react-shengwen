import React, { Component } from 'react';
import { DispatchDynamicCss } from './DynamicCommon';
import  { dispatch } from '@a/img/Dynamic'
import { withRouter } from 'react-router-dom';


@withRouter
class DispatchDynamic extends Component {
  handleClick=() => {
      this.props.history.push('/Dispatch')
      // console.log(this.props.history)
    
  } 
  render() {
    return (
      <DispatchDynamicCss>
        <img src={dispatch} alt=""  onClick={this.handleClick}/>
      </DispatchDynamicCss>
    );
  }
}

export default DispatchDynamic;