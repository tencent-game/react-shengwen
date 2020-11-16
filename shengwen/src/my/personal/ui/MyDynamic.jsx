import React from 'react';
import {StyledMyDynamic} from "./styledMyDynamic"
import DynamicInfoHeader from '../../../dynamic/UI/DynamicInfoHeader';
import DynamicFooter from '../../../dynamic/UI/DynamicFooter';


function MyDynamic(props) {
  return (
    <StyledMyDynamic>
      <div className="dynamic-item">
      <ul className='ulcontent'>
        <li className='licontent'>
          <DynamicInfoHeader></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li>
        </ul>
      </div>
    </StyledMyDynamic>
  );
}

export default MyDynamic;