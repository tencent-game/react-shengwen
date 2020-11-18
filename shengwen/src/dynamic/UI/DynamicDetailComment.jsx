import React,{useState} from 'react';
import { DynamicDetailCommentCss } from './StyledDynamic'
import { info } from '@a/img/Dynamic'
import CommentMore from '../../component/Dynamic/CommentMore'
import {Fabulous,
  Fabulous_,
  message
  } from '@a/img/Dynamic/index.js'


const DynamicDetailComment = (props) => {
  console.log(props)
  let [bool1, setBool1] = useState(false)
  let [bool2, setBool2] = useState(false)
  function handleClick1(){
    setBool1((bool1)=>{return !bool1})
  }
  function handleClick2(){
    setBool2((bool2)=>{return !bool2})
  
  }
  return (
    <DynamicDetailCommentCss>
      <h2>全部评论</h2>
      <div className='commentleft'>
        <div className='images'><img src={info} alt="" /></div></div>
      <div className='commentright'>
        <div className='header'>
          <p>好19吴彦祖</p>
          <CommentMore></CommentMore>
        </div>
        <div className='firstcommentinfo'>
          <p>家具家居设计风格重要，而且一旦定下来也很难改变。</p>
        </div>
        <div className='firstcommentdetail'>
          <p>昨天23：19</p>
          <span>
            <img onClick={handleClick1} src={bool1===false? Fabulous : Fabulous_} alt=""/>100<img src={message} alt=""/>
          </span>
        </div>
        <div className='replayinfo'>
          <p>@lucky: 同意同意，所以在设计之初一定要做好规划。</p>
          <div className='firstcommentdetail'>
          <p>昨天23：19</p>
          <span>
            <img onClick={handleClick2} src={bool2===false? Fabulous : Fabulous_}alt=""/>100<img src={message} alt=""/><CommentMore></CommentMore>
          </span>
        </div>
        </div>
      </div>

    </DynamicDetailCommentCss>
  );
};

export default DynamicDetailComment;