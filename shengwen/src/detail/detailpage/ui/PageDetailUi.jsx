import React, { Component } from 'react'
import detail4 from '@a/img/detail/detail4.png'
import QRcode from '@a/img/detail/QRcode.png'
import arrow from '@a/img/detail/arrow.png'
import header1 from '@a/img/detail/header1.png'
import header2 from '@a/img/detail/header2.png'
import header3 from '@a/img/detail/header3.png'
import header4 from '@a/img/detail/header4.png'
import header5 from '@a/img/detail/header5.png'
import { DetailWrap } from './PageDetailStyle'
import Return from '@a/img/homepage/Return.png'
import forward from '@a/img/homepage/forward.png'
import watch from '@a/img/homepage/watch.png';
import { Modal } from 'antd-mobile';
import {post} from '@/utils/http.js'
import { withRouter } from "react-router-dom"
@withRouter

class PageDetailUi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      data:this.props.location.state.data,
      article:this.props.location.state.data.article,
      readList:[],
      fanType:this.props.location.state.data.fanType,
      Negation:""
    };
  }
  
  async componentDidMount(){
    let result= await post ({
      url:'/api/article/relation',
      data:{
        articleId:this.state.data.article.articleId
      }
    })
        //  console.log(result);
     this.setState({
      readList:result.data.rows
    })
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
  handleField=(item)=>{
    let itemValue=item.target.innerText
    let FieldList=this.state.detailList.filter((data)=>{
      return data.field.includes(itemValue)
    })
    let  {history}=this.props
    history.push('./field',{FieldList,itemValue})
  }
  handleReturn = () => {
    let { history } = this.props
    history.goBack()
  }
  handleFollow= async()=>{
    let  Negation=(this.state.fanType===0?1:0)
   this.setState({
    fanType:Negation
   })
   console.log(Negation);
   console.log(this.state.fanType);
     await post ({
      url:'/api/homePage/author/attention',
      data:{
        "fansType":this.state.fanType,
        "toUserId": this.state.data.publisher.userId,
        "userId": "2"
      }
    })
  


  }
  handleDetail= async(item)=>{
    
    let result= await post ({
      url:'/api/article/content',
      data:{
        "articleId":item.articleId,
        "publisherId":item.userId
      }   
    })
    let result1= await post ({
      url:'/api/article/relation',
      data:{
        articleId:result.data.article.articleId
      }
    })
    console.log(result);
    this.setState({
      data:result.data,
      article:result.data.article,
      readList:result1.data.rows,
      fanType:result.data.fanType,
      Negation:""
    })
    
  }
  render() {
    // console.log(this.state.data.publisher.userId);
    console.log(this.state.fanType);
    let content=this.state.article.articleText
    let  arr=content.split("#")
    let dayList=this.state.readList&&this.state.readList.map(item=>{
      let dateStart=item.articleTime
      var dateBegin = new Date(dateStart.replace(/-/g, "/"))
      let dateEnd=new Date()
      var dateDiff = dateEnd.getTime() - dateBegin.getTime()
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000))
      return dayDiff
    })
    return (
      <DetailWrap>
      
        <div className="detailBk" style={
          { background: `url(${this.state.article.articleCover}) center center /  100% 2.2rem no-repeat ` }}>
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
          <h1 className="main-title">{this.state.article.articleHeadline}</h1>
          <div className="author-card">
            <div className="author-head" style={
              { background: `url(${this.state.data.publisher.userinfoPhoto}) center center /  .4rem .4rem no-repeat` }}
            ></div>
            <div className="author-info">
              <div className="author-name">{this.state.data.publisher.userName}</div>
              <div className="author-introduce">这个人还没有想好怎么介绍自己</div>
            </div>
            <button className={this.state.fanType===0?"follow-bn":"followEnd-bn"} onClick={this.handleFollow}>{this.state.fanType===0? "+关注" :"已关注"}</button>
          </div>
          <div className="article-main">
            <div className="text-paragraph">
              <span>{arr[0]}</span>
              
            </div>
            <div className="article-img">
              <img src={arr[3]} alt="" />
            </div>
            <div className="text-paragraph">
              <span>{arr[1]}</span>
            </div>
            <div className="article-img">
              <img src={arr[4]} alt="" />
            </div>
            <div className="text-paragraph">
              <span>{arr[2]}</span>
              
            </div>
            <div className="article-img">
              <img src={arr[5]} alt="" />
            </div>
            <div className="text-paragraph">
              <span>{arr[0]}</span>   
            </div>
          </div>
          <div className="appreciate_main">
            <div className="related-contents">
               <div className="related-card" onClick={this.handleField}>
                <div className="reCard-contents">{this.state.data.domain.domainName}</div>
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
            {this.state.readList&&this.state.readList.map((item,index)=>{
                  return <div key={item.articleId} className="art-card" onClick={this.handleDetail.bind(this,item)} >
                  <div className="art-left" >
                    <div className="art-left-top">
                      {item.articleHeadline}
                    </div>
                    <div className="art-left-bn">
                      <div className="art-left-bot">
                        <div  className="img-watch" style={
                          {background:`url(${watch})center center/  18px 14px no-repeat`}  
                        }
                        ></div>
                        <span>{item.articleViewCount}</span>
                      </div>
                      <div className="art-left-ri">
                        <span>{item.userName}</span>
                        <span>{dayList[index]}天前</span>
                      </div>
                    </div>
                  </div>
                  <div className="art-right" style={
                  {background:`url(${item.articleCover}) center center/1.42rem 1.02rem`}
                  }>
                  </div>
                </div>
                })}
            </div>
          </div>
        </div>
      </DetailWrap>
    )
  }
}
export default PageDetailUi