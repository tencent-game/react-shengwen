import React from 'react';

import {Route,Switch} from 'react-router-dom'
import DynamicInfo from './DynamicInfo'
const DynamicContent = () => {
  return (
    
      
        <Switch>
          <Route path='/dynamic/follow' component={DynamicInfo}></Route>
          <Route path='/dynamic/hot' component={DynamicInfo}></Route>
        </Switch>
      
    
  );
};

export default DynamicContent;