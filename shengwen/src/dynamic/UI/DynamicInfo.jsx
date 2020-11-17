import React from 'react';
import { DynamicContentCss,  } from './StyledDynamic'

import DynamicInfoHeader from '../UI/DynamicInfoHeader'
import DynamicFooter from '../UI/DynamicFooter'


const DynamicInfo = (props) => {
  // console.log(props.list)
  return (
    <DynamicContentCss>
      <ul className='ulcontent'>
        { props.list.map(value=>{
          // console.log(value.fansType)
          return (
            <li className='licontent' key={value.dynamicId}>
          <DynamicInfoHeader {...value}></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li>
          )
        })}
        {/* <li className='licontent'>
          <DynamicInfoHeader></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li>
        <li className='licontent'>
          <DynamicInfoHeader></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li>
        <li className='licontent'>
          <DynamicInfoHeader></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li>
        <li className='licontent'>
          <DynamicInfoHeader></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li>
        <li className='licontent'>
          <DynamicInfoHeader></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li> */}
      </ul>
    </DynamicContentCss>
  );
};

export default DynamicInfo;