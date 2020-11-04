import React , { Component }from 'react'
import {ListWrap} from '../../component/Message/styledMessage'

import img from '../../assets/img/message/head.png'
import img1 from '../../assets/img/message/back.png'

import {useHistory} from "react-router-dom"


function Remark (props) {
  const history = useHistory()
    return (
      <ListWrap>
        <header> <div className="back" onClick={()=>history.goBack()}> <img src={img1} alt=""/></div> <p>评论通知</p> </header>
        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>评论了你的文章</p>  <a href="www.baidu.com">《日本零售发展史》</a> </div>
            <div className="que">请问文中的数据来源于哪里啊？</div>
        </div>

        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>评论了你的文章</p>  <a href="www.baidu.com">《日本零售发展史》</a> </div>
            <div className="que">请问文中的数据来源于哪里啊？</div>
        </div>

        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>评论了你的文章</p>  <a href="www.baidu.com">《日本零售发展史》</a> </div>
            <div className="que">请问文中的数据来源于哪里啊？</div>
        </div>
        
        <div className="wrap">
            <div className="name">
              <div className="left">
                <div className="box"><img src={img} alt=""/></div> 
                <p>特立独行的猫</p>
              </div>
              <div>2018/02/25 16:18</div>
            </div>
            <div className="title"> <p>评论了你的文章</p>  <a href="www.baidu.com">《日本零售发展史》</a> </div>
            <div className="que">请问文中的数据来源于哪里啊？</div>
        </div>
      </ListWrap>
    );
}

export default Remark;