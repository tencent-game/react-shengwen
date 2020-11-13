import React from 'react'
import {TipsWrap} from './styledMessage'
import {withRouter} from "react-router-dom"
import img from '../../assets/img/message/head.png'


function Tips(props){
    return (
      <TipsWrap>
          <div className="wrap">
            <div className="left"><img src={img} alt=""/></div>
            <div className="center">
              <p>特立独行的猫</p>
              <p className="btm">你写的真不错，看出来花了不少心思~</p>
            </div>
              <div className="right">3分钟前</div>
          </div>

          <div className="wrap">
            <div className="left"><img src={img} alt=""/></div>
            <div className="center">
              <p>特立独行的猫</p>
              <p className="btm">你写的真不错，看出来花了不少心思~</p>
            </div>
            <div className="right">3分钟前</div>
          </div>

          <div className="wrap">
            <div className="left"><img src={img} alt=""/></div>
            <div className="center">
              <p>特立独行的猫</p>
              <p className="btm">你写的真不错，看出来花了不少心思~</p>
            </div>
            <div className="right">3分钟前</div>
          </div>
      </TipsWrap>
    )
}

export default withRouter(Tips)
