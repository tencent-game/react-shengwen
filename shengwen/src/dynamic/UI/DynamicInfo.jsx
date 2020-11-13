import React from 'react';
import { DynamicContentCss,  } from './StyledDynamic'

import DynamicInfoHeader from '../UI/DynamicInfoHeader'
import DynamicFooter from '../UI/DynamicFooter'


const DynamicInfo = () => {
  return (
    <DynamicContentCss>
      <ul className='ulcontent'>
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
        </li>
        <li className='licontent'>
          <DynamicInfoHeader></DynamicInfoHeader>
          <DynamicFooter></DynamicFooter>
        </li>
      </ul>
    </DynamicContentCss>
  );
};

export default DynamicInfo;