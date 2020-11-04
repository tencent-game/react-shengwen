import React , { Component }from 'react'
import {ListWrap} from '../../component/Message/styledMessage'

import img from '../../assets/img/message/head.png'

import {useHistory} from "react-router-dom"

import img1 from '../../assets/img/message/back.png'

function Fans (props) {
  const history = useHistory()
    return (
      <ListWrap>
        <header> <div className="back" onClick={()=>history.goBack()}> <img src={img1} alt=""/></div> <p>粉丝通知</p> </header>
        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>关注了你</p></div>
        </div>

        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>关注了你</p></div>
          
        </div>
  
        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>关注了你</p></div>
        </div>
      </ListWrap>
    );
}

export default Fans;