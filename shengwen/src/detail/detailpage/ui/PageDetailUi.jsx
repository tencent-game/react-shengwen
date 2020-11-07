import React, { Component } from 'react'
import backGround from '@a/img/detail/background.jpg'
import detail1 from '@a/img/detail/detail1.png'
import detail2 from '@a/img/detail/detail2.png'
import detail3 from '@a/img/detail/detail.png'
import detail4 from '@a/img/detail/detail4.png'
import QRcode from '@a/img/detail/QRcode.png'
import arrow from '@a/img/detail/arrow.png'
import head1 from '@a/img/homepage/head1.png'
import header1 from '@a/img/detail/header1.png'
import header2 from '@a/img/detail/header2.png'
import header3 from '@a/img/detail/header3.png'
import header4 from '@a/img/detail/header4.png'
import header5 from '@a/img/detail/header5.png'
// import praise from '@a/img/detail/praise.png'
// import praiseEnd from '@a/img/detail/praiseEnd.png'
// import Collection from '@a/img/detail/Collection.png'
// import CollectionEnd from '@a/img/detail/CollectionEnd.png'
// import Comment from '@a/img/detail/comment.png'

import { DetailWrap } from './PageDetailStyle'
import Return from '@a/img/homepage/Return.png'
import forward from '@a/img/homepage/forward.png'
import ArticleList from '@/home/homepage/ui/ArticleList'
import DynamicDetailComment from '@/dynamic/UI/DynamicDetailComment'
import { Modal } from 'antd-mobile';
import { withRouter } from "react-router-dom"
@withRouter

class PageDetailUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
    };
  }
  
  showModal = key => (e) => {
    e.preventDefault(); // 修复 Android 上点击穿透
    this.setState({
      [key]: true,
    });
  }
  onClose = key => () => {
    this.setState({
      [key]: false,
    });
  }
  handleAppreciate=()=>{
    let { history } = this.props
    history.push('/appreciate')
  }
  handleField=()=>{
    // console.log(this.props);
    let { history } = this.props
    history.push('/field')
  }
  handleReturn = () => {
    let { history } = this.props
    history.goBack()
  }
  render() {
    return (
      <DetailWrap>
        <div className="detailBk" style={
          { background: `url(${backGround}) center center /  100% 2.2rem no-repeat` }}>
          <div className="detail-nav">
            <div className="detail-re" style={
              { background: `url(${Return}) center center /  .2rem .2rem no-repeat` }}
              onClick={this.handleReturn}></div>
            <div className="detail-fo" style={
              { background: `url(${forward}) center center /  .2rem .2rem no-repeat` }}
              onClick={this.showModal('modal1')}></div>
              <Modal
                  visible={this.state.modal1}
                  transparent
                  maskClosable={false}
                  onClose={this.onClose('modal1')}
                  closable={true}
                  style={{ marginTop:"0rem",background:"#ffffff",borderRadius:".1rem"}}
                >
            <div style={{ top:".9rem",background:"#ffffff",borderRadius:".1rem"}}>
              <div style={{ }}>
                <img src={detail4} alt=""style={{width: "2.5rem",height: "1.5rem",}}/>
              </div>
              <div>
              <div style={{ fontSize:".1rem",background:"#ffffff"}}>5月4日，苹果首席执行官库克接受了......</div>
              <div>
                <img src={QRcode} alt=""style={{width: ".45rem",height: ".45rem",}}/>
              </div>
              </div>
            </div>
          
        </Modal>
          </div>
        </div>
        <div className="detail-nav">
          <div className="detail-re" style={
            { background: `url(${Return}) center center /  .2rem .2rem no-repeat` }}
            onClick={this.handleReturn}></div>
          <div className="detail-fo" style={
            { background: `url(${forward}) center center /  .2rem .2rem no-repeat` }}></div>
        </div>
        <div className="detail-main">
          <h1 className="main-title">一大波好玩活动等你来“打卡”</h1>
          <div className="author-card">
            <div className="author-head" style={
              { background: `url(${head1}) center center /  .4rem .4rem no-repeat` }}
            ></div>
            <div className="author-info">
              <div className="author-name">UGD</div>
              <div className="author-introduce">这个人还没有想好怎么介绍自己</div>
            </div>
            <div className="follow-bn">+关注</div>
          </div>
          <div className="article-main">
            <div className="text-paragraph">
              <span>瑞虹天地月亮湾L1</span>
              <span><br /></span>
              <span>既能买家具又能吃美食，还有这种跨界骚操作？集家居和餐饮于</span>
              <span><br /></span>
              <span>一体的Minderlands™就做到啦~</span>
            </div>
            <div className="article-img">
              <img src={detail1} alt="" />
            </div>
            <div className="text-paragraph">
              <span>瑞虹天地月亮湾L1</span>
              <span><br /></span>
              <span>既能买家具又能吃美食，还有这种跨界骚操作？集家居和餐饮于</span>
              <span><br /></span>
              <span>一体的Minderlands™就做到啦~</span>
            </div>
            <div className="article-img">
              <img src={detail2} alt="" />
            </div>
            <div className="text-paragraph">
              <span>瑞虹天地月亮湾L1</span>
              <span><br /></span>
              <span>既能买家具又能吃美食，还有这种跨界骚操作？集家居和餐饮于</span>
              <span><br /></span>
              <span>一体的Minderlands™就做到啦~</span>
            </div>
            <div className="article-img">
              <img src={detail3} alt="" />
            </div>
            <div className="text-paragraph">
              <span>瑞虹天地月亮湾L1</span>
              <span><br /></span>
              <span>既能买家具又能吃美食，还有这种跨界骚操作？集家居和餐饮于</span>
              <span><br /></span>
              <span>一体的Minderlands™就做到啦~</span>
            </div>
          </div>
          <div className="appreciate_main">
            <div className="related-contents">
              <div className="related-card" onClick={this.handleField}>
                <div className="reCard-contents">设计</div>
                <div className="reCard-img">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="related-card" onClick={this.handleField}>
                <div className="reCard-contents">装修</div>
                <div className="reCard-img">
                  <img src={arrow} alt="" />
                </div>
              </div>
              <div className="related-card" onClick={this.handleField}>
                <div className="reCard-contents">家具</div>
                <div className="reCard-img">
                  <img src={arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="appreciate-bn" onClick={this.handleAppreciate}>
              <span>赞赏</span>
            </div>
            <div className="appreciate-header">
              <div className="headerBn1">
                <img src={header1} alt="" />
              </div>
              <div className="headerBn2">
                <img src={header2} alt="" />
              </div>
              <div className="headerBn3">
                <img src={header3} alt="" />
              </div>
              <div className="headerBn4">
                <img src={header4} alt="" />
              </div>
              <div className="headerBn5">
                <img src={header5} alt="" />
              </div>
            </div>
          </div>
          <div className="related-reading">
            <h1>相关阅读</h1>
            <div>
              <ArticleList ></ArticleList>
              <ArticleList ></ArticleList>
              <ArticleList ></ArticleList>
              <ArticleList ></ArticleList>
            </div>
          </div>
          <DynamicDetailComment style={{ margin: 0, }}></DynamicDetailComment>
        </div>
      </DetailWrap>
    )
  }
}
export default PageDetailUi