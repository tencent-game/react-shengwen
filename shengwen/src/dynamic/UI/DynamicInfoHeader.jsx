import React from 'react';
import {  DynamicInfoHeaderCss,DynamicInfoCss} from './StyledDynamic'
import FollowBtn from '../../component/Dynamic/FollowBtn'
import DynamicMore from '../../component/Dynamic/DynamicMore';
import My from '../../assets/img/my.png'
import {useHistory} from 'react-router-dom'

const  DynamicInfoHeader =()=> {
  const history= useHistory()
  function dynamicDetail(){
    history.push('/Dynamicdetail')
  }
    return (
      <>
      <DynamicInfoHeaderCss>
        <div className='dynamicleft'>
        <div className='image'><img src={My} alt="" /></div>
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
          <img src="http://cloud.axureshop.com/gsc/R8ZIPV/2e/07/1c/2e071c738b2b4d92bc5c5f7e8402bc07/images/动态-关注/u2691.png?token=0e0d7487359b07c711756f43ff9a1474476662209335ed6379142047399d3683" alt="" />
          <img src="http://cloud.axureshop.com/gsc/R8ZIPV/2e/07/1c/2e071c738b2b4d92bc5c5f7e8402bc07/images/动态-关注/u2692.png?token=f19a6855f31bbf0453833a38d4aaf38add72a0b1e849eb0b17e97d37ab875f88" alt="" />
          <img src="http://cloud.axureshop.com/gsc/R8ZIPV/2e/07/1c/2e071c738b2b4d92bc5c5f7e8402bc07/images/动态-关注/u2693.png?token=70428a9bb283078d7c73a5b68d57eb4f8042bdc2b9bfcb178e008e491284e787" alt="" />
        </div>

    </DynamicInfoCss>
    </>
    );
  
}

export default DynamicInfoHeader;