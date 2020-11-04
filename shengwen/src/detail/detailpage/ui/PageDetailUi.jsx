import React, { Component } from 'react'
import backGround from '@a/img/detail/background.jpg'
import detail1 from '@a/img/detail/detail1.png'
// import detail2 from '@a/img/detail/detail2.png'
// import detail3 from '@a/img/detail/detail.png'
import head1 from '@a/img/homepage/head1.png'
import {DetailWrap} from './PageDetailStyle'
import Return from '@a/img/homepage/Return.png'
import forward from '@a/img/homepage/forward.png'
import {withRouter} from "react-router-dom"
import DynamicDetailFooter from '@/dynamic/UI/DynamicDetailFooter'
@withRouter
 class PageDetailUi extends Component {
  handleReturn=()=>{
    let{history} =this.props
    history.goBack()
  }
  render() {
    return (
      <DetailWrap>
        <div className="detailBk">
          <img src={backGround}alt=""/>
        </div>
        <div className="detail-nav">
          <div className="detail-re" style={
            {background:`url(${Return}) center center /  .2rem .2rem no-repeat`}}></div>
          <div className="detail-fo" style={
            {background:`url(${forward}) center center /  .2rem .2rem no-repeat`}}></div>
        </div>
        <div className="detail-main">
          <h1 className="main-title">一大波好玩活动等你来“打卡”</h1>
          <div className="author-card">
              <div className="author-head" style={
              {background:`url(${head1}) center center /  .4rem .4rem no-repeat`}}
              ></div>
              <div className="author-info">
                <div className="author-name">UGD</div>
                <div className="author-introduce">这个人还没有想好怎么介绍自己</div>
              </div>
              <div className="follow-bn">+关注</div>
          </div>
          <div className="article-main">
            <div>
              <span>瑞虹天地月亮湾L1</span>
              <span><br/></span>
              <span>既能买家具又能吃美食，还有这种跨界骚操作？集家居和餐饮于</span>
              <span><br/></span>
              <span>一体的Minderlands™就做到啦~</span>
            </div>
            <div>
              <img src={detail1} alt=""/>
            </div>
         </div>
        </div>
        <DynamicDetailFooter className="detail-footer"></DynamicDetailFooter>
      </DetailWrap>
    )
  }
}
export default PageDetailUi