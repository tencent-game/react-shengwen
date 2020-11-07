import React from 'react';
import {  DynamicInfoHeaderCss,DynamicInfoCss} from './StyledDynamic'
import FollowBtn from '../../component/Dynamic/FollowBtn'
import DynamicMore from '../../component/Dynamic/DynamicMore';
import {useHistory} from 'react-router-dom'
import {info,info1,info2 } from '@a/img/Dynamic/index'
const  DynamicInfoHeader =()=> {
  const history= useHistory()
  function dynamicDetail(){
    history.push('/Dynamicdetail')
  }
  function personalDynamic(){
    history.push('/personal/dynamic')
  }
    return (
      <>
      <DynamicInfoHeaderCss >
        <div className='dynamicleft' onClick={personalDynamic}>
        <div className='image'><img src={info} alt="" /></div>
        <div className="describe">
          <span>十点新闻</span>
          <p >2018-05-06 10:56:56</p>
        </div>
      </div>
      <FollowBtn ></FollowBtn>
      <DynamicMore></DynamicMore>
    </DynamicInfoHeaderCss>
    <DynamicInfoCss onClick={dynamicDetail}>
        <div className='message'>
          <p>5月4日，苹果首席执行官库克接受了ABC News的采访谈到隐私保护表示，苹果通过应用程序商店，在应用程序上赚钱，但不会在脸书上赚钱，而在谷歌浏览器上赚钱。因为相信谷歌是最好的浏览器。“用户不是苹果的产品，而且我们珍惜你的数据。”</p>
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