import React from 'react';
import DynamicHeader from './DynamicHeader'
import DynamicContent from './DynamicContent'
import DispatchDynamic from '../../component/Dynamic/DispatchDynamic';
const DynamicUi = (props) => {
  // console.log(props)
  
  return (
    
    <React.Fragment>
      
      <DynamicHeader ></DynamicHeader>
      <DispatchDynamic ></DispatchDynamic>
      {props.list&& <DynamicContent {...props}></DynamicContent>}
      
    </React.Fragment>
  );
};

export default DynamicUi;