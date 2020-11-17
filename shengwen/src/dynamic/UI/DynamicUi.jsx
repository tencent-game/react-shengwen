import React from 'react';
import DynamicHeader from './DynamicHeader'
import DynamicContent from './DynamicContent'
const DynamicUi = (props) => {
  // console.log(props)
  return (
    
    <React.Fragment>
      
      <DynamicHeader ></DynamicHeader>
      {props.list&& <DynamicContent {...props}></DynamicContent>}
      
    </React.Fragment>
  );
};

export default DynamicUi;