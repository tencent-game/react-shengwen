import React from 'react'
import {MenuWrap} from './styledMessage'

import img1 from '../../assets/img/message/zan.png'
import img2 from '../../assets/img/message/pl.png'
import img3 from '../../assets/img/message/fans.png'
import img4 from '../../assets/img/message/tz.png'
import { withRouter } from 'react-router-dom'

 function Menu (props) {
    return (
      <MenuWrap>
        <div onClick={() => props.history.push("/like")}> <img src={img1} alt=""/> <div className="title">赞</div> </div>
        <div onClick={() => props.history.push("/remark")}> <img src={img2} alt=""/> <div className="title">评论</div> </div>
        <div onClick={() => props.history.push("/fans")}> <img src={img3} alt=""/> <div className="title">粉丝</div> </div>
        <div onClick={() => props.history.push("/notice")}> <img src={img4} alt=""/> <div className="title">通知</div> </div>
      </MenuWrap>
    )
}
export default withRouter(Menu) 