import React from 'react'
import {ListWrap} from '../../component/Message/styledMessage'

import img from '../../assets/img/message/head.png'

import {useHistory} from "react-router-dom"

import img1 from '../../assets/img/message/back.png'

function Notice (props) {
  const history = useHistory()
    return (
      <ListWrap>
        <header> <div className="back" onClick={()=>history.goBack()}> <img src={img1} alt=""/></div> <p>收藏通知</p> </header>
        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>系统</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>【倒计时4天】敢不敢来一场高逼格的文案创作大赛？详情请戳 <a href="baidu.com">http://www.wenan.com/enter</a></p></div>
          
        </div>
  
        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>公告</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>恭喜，你发布的原创文章 <a href="baidu.com">日本零售发展史</a> 已被管理员设置为首页推荐</p></div>
        </div>
      </ListWrap>
    );
}

export default Notice;