import React,{useState} from 'react';
import {  DynamicFooterCss } from './StyledDynamic'
import {Fabulous,
  Fabulous_,
  comment,
  forward,} from '@a/img/Dynamic/index.js'
import { useHistory } from 'react-router-dom';
const DynamicFooter = (props)=> {
  let [bool, setBool] = useState(false)
  let history = useHistory()
  function handleClick(){
    setBool((bool)=>{return !bool})
    console.log(bool)
  }
  function toDetail(){
  
    history.push('/Dynamicdetail/'+props.dynamicId)
  }
  // console.log(props)
  const forwardDynamic =() => {
    history.push('/ForwardDynamic',{name:props.userName,detail:props.dynamic.dynamicText,id:props.dynamicId})
  }
    return (
      
      <DynamicFooterCss>
        <li onClick={handleClick}><img src={bool===false? Fabulous : Fabulous_} alt="" /><span>100</span></li>
        <li onClick={toDetail}><img src={comment} alt=""  /><span>200</span></li>
        <li onClick={forwardDynamic}><img src={forward} alt=""  /><span>300</span></li>
      </DynamicFooterCss>
    );
  
}

export default DynamicFooter;