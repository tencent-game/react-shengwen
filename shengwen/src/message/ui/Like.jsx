import React from 'react'

import {LikeWrap} from './styledMessage'

import img from '../../assets/img/message/head.png'


function Like (props) {
    return (
      <LikeWrap>
        <h1>点赞通知</h1>
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
        </div>
      </LikeWrap>
    )
}


export default Like