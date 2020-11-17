import React from 'react';

import {Route,Switch} from 'react-router-dom'
import DynamicInfo from './DynamicInfo'
const DynamicContent = (props) => {
  // console.log(props)
  return (
    
      
        <Switch>
          <Route path='/dynamic/follow'><DynamicInfo {...props} ></DynamicInfo></Route>
          <Route path='/dynamic/hot' ><DynamicInfo {...props} ></DynamicInfo></Route>
        </Switch>
      
    
  );
};

export default DynamicContent;