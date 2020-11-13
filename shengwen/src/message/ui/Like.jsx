import React from 'react'

import {LikeWrap} from './styledMessage'

import {useHistory} from "react-router-dom"

import img from '../../assets/img/message/back.png'

import List from '../../component/Message/List'



function Like (props) {
  const history = useHistory()
    return (
      <LikeWrap>
        <header> <div className="back" onClick={()=>history.goBack()}> <img src={img} alt=""/></div> <p>点赞通知</p> </header>
        {/* <div className="wrap">
            <div className="name">
              <div className="left">
                <img src={img} alt=""/>
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>点赞了你的文章</p>  <a href="www.baidu.com">《日本零售发展史》</a> </div>
        </div>

        <div className="wrap">
            <div className="name">
              <div className="left">
                <img src={img} alt=""/>
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>点赞了你的文章</p>  <a href="www.baidu.com">《日本零售发展史》</a> </div>
        </div>

        <div className="wrap">
            <div className="name">
              <div className="left">
                <img src={img} alt=""/>
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>点赞了你的文章</p>  <span>《日本零售发展史》</span> </div>
        </div>

        <div className="wrap">
            <div className="name">
              <div className="left">
                <img src={img} alt=""/>
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>点赞了你的文章</p>  <span>《日本零售发展史》</span> </div>
        </div> */}
        <List></List>
        <List></List>
        <List></List>
        <List></List>
      </LikeWrap>
    )
}


export default Like