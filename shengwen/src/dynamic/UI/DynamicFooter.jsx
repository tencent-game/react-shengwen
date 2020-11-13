import React,{useState} from 'react';
import {  DynamicFooterCss } from './StyledDynamic'
import {Fabulous,
  Fabulous_,
  comment,
  forward,} from '@a/img/Dynamic/index.js'
const DynamicFooter = ()=> {
  let [bool, setBool] = useState(false)
  function handleClick(){
    setBool((bool)=>{return !bool})
    console.log(bool)
  }
    return (
      <DynamicFooterCss>
        <li onClick={handleClick}><img src={bool===false? Fabulous : Fabulous_} alt="" /><span>100</span></li>
        <li><img src={comment} alt="" /><span>200</span></li>
        <li><img src={forward} alt="" /><span>300</span></li>
      </DynamicFooterCss>
    );
  
}

export default DynamicFooter;