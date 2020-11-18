import React from 'react';
import { DynamicContentCss,  } from './StyledDynamic'

import DynamicInfoHeader from '../UI/DynamicInfoHeader'
import DynamicFooter from '../UI/DynamicFooter'


const DynamicInfo = (props) => {
  return (
    <DynamicContentCss>
      <ul className='ulcontent'>
        { props.list.map(value=>{
          return (
            <li className='licontent' key={value.dynamicId}>
          <DynamicInfoHeader {...value} ></DynamicInfoHeader>
          <DynamicFooter {...value}></DynamicFooter>
        </li>
          )
        })}
        
      </ul>
    </DynamicContentCss>
  );
};

export default DynamicInfo;