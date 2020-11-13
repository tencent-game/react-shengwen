import React from 'react';
<<<<<<< HEAD:shengwen/src/my/personal/ui/MyDynamic.jsx
import {StyledMyDynamic} from "../styledMyDynamic"
import avatar from "../../../assets/img/my/avatar.png"
import DynamicInfoHeader from '../../../dynamic/UI/DynamicInfoHeader';
import DynamicFooter from '../../../dynamic/UI/DynamicFooter';
=======
import {StyledMyDynamic} from "./styledMyDynamic"
import DynamicInfoHeader from '../../dynamic/UI/DynamicInfoHeader';
import DynamicFooter from '../../dynamic/UI/DynamicFooter';
>>>>>>> master:shengwen/src/my/personal/MyDynamic.jsx


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