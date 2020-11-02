import React, { Component } from 'react';
import DynamicDetailHeader from '../UI/DynamicDetailHeader';
import DynamicInfoHeader from '../UI/DynamicInfoHeader';
import DynamicDetailFooter from '../UI/DynamicDetailFooter'
class DynamicDetail extends Component {
  render() {
    return (
      <div style={{padding:'.1rem'}}>
        <DynamicDetailHeader></DynamicDetailHeader>
        <DynamicInfoHeader></DynamicInfoHeader>
        <DynamicDetailFooter></DynamicDetailFooter>
      </div>
    );
  }
}

export default DynamicDetail;