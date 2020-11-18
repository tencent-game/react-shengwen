import React from 'react';
import {  DynamicInfoHeaderCss,DynamicInfoCss} from './StyledDynamic'
import FollowBtn from '../../component/Dynamic/FollowBtn'
import DynamicMore from '../../component/Dynamic/DynamicMore';
import {useHistory} from 'react-router-dom'
import {info,info1,info2 } from '@a/img/Dynamic/index'
const  DynamicInfoHeader =(props)=> {
  const history= useHistory()
  function dynamicDetail(){
    history.push('/Dynamicdetail/'+props.dynamicId)
  }
  function personalDynamic(){
    history.push('/personal/dynamic')
  }
  // console.log(props.dynamic&&props.dynamic.dynamicText)
    return (
      {props} && <>
      <DynamicInfoHeaderCss >
        <div className='dynamicleft' onClick={personalDynamic}>
        <div className='image'><img src={props.userinfoPhoto} alt="" /></div>
        <div className="describe">
          <span>{props.userName}</span>
          <p>{props.dynamic&&props.dynamic.dynamicTime}</p>
        </div>
      </div>
      <FollowBtn></FollowBtn>
      <DynamicMore></DynamicMore>
    </DynamicInfoHeaderCss>
    <DynamicInfoCss onClick={dynamicDetail}>
        <div className='message'>
          <p>{props.dynamic&&props.dynamic.dynamicText}</p>
        </div>
        <div className='images'>
          <img src={info} alt="" />
          <img src={info1} alt="" />
          <img src={info2} alt="" />
        </div>

    </DynamicInfoCss>
    </>
    );
  
}

export default DynamicInfoHeader;