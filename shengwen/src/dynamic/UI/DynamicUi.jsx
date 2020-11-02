import React from 'react';
import DynamicHeader from './DynamicHeader'
import DynamicContent from './DynamicContent'
import {Route ,NavLink} from 'react-router-dom'
const DynamicUi = () => {
  return (
    <React.Fragment>
      
      <DynamicHeader></DynamicHeader>
      <DynamicContent></DynamicContent>
      
    </React.Fragment>
  );
};

export default DynamicUi;