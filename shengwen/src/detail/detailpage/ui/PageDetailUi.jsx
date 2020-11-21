import React, { Component } from 'react'
import detail4 from '@a/img/detail/detail4.png'
import QRcode from '@a/img/detail/QRcode.png'
import arrow from '@a/img/detail/arrow.png'
import header1 from '@a/img/detail/header1.png'
import header2 from '@a/img/detail/header2.png'
import header3 from '@a/img/detail/header3.png'
import header4 from '@a/img/detail/header4.png'
import header5 from '@a/img/detail/header5.png'
import Antipathy from '@a/img/Dynamic/踩.png';
import report from '@a/img/Dynamic/举报.png';
import praiseCo from '@a/img/Dynamic/点赞1.png';
import praiseCoEnd from '@a/img/Dynamic/点赞2.png';
import commit from '@a/img/Dynamic/评论.png';
import { DetailWrap } from './PageDetailStyle'
import Return from '@a/img/homepage/Return.png'
import forward from '@a/img/homepage/forward.png'
import watch from '@a/img/homepage/watch.png';
import {Popover, NavBar, Icon , Modal } from 'antd-mobile';
import {post,get} from '@/utils/http.js'
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
      commitList:[],
      fanType:this.props.location.state.data.fanType,
      Negation:"",
    };
  }
  
  async componentDidMount(){
    let result= await post ({
      url:'/api/article/relation',
      data:{
        articleId:this.state.data.article.articleId
      }
    })
    let resultCommit= await get(
      '/api/comment/findAll?commentType=0&id='+this.state.data.article.articleId+'&limit=10&offset=0'
    )
    //  console.log(resultCommit);
     this.setState({
      readList:result.data.rows,
      commitList:resultCommit.data.data.rows
    })
    // console.log(this.state.commitList);
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
    let  {data}=this.state
    history.push('/appreciate',{data})
  }
  handleReturn = () => {
    let { history } = this.props
    history.goBack()
  }
  handleFollow= async()=>{
   this.setState({
    fanType:this.state.fanType===0?1:0
   } ,function() {
    this.loadList();
  })
  //  console.log(Negation);
  //  console.log(this.state.fanType);
     
  }
  async loadList(){
    return await post ({
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
 
   
  onSelect = (opt) => {
    // console.log(opt.props.value);
    this.setState({
      visible: false,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    // console.log(this.state.data.publisher.userId);
    // console.log(this.state.fanType);
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
               <div className="related-card" >
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
          <div className="hotCommit">
            <h1>热门评论</h1>
            {this.state.commitList&&this.state.commitList.map((itemValue)=>{
              return(
                <div className="hotCommit-card" key={itemValue.commentId}>
                  <div className="hotCommit-left">
                      <img src={itemValue.userinfoPhoto} alt=""/>
                  </div>
                  <div className="hotCommit-right">
                  <NavBar
                    mode="light"
                    leftContent={[<span key={555} style={{color:"#aaa",fontSize:".11rem"}}>阿银</span>]}
                    rightContent={
                      <Popover mask
                        overlayClassName="fortest"
                        overlayStyle={{ color: 'currentColor' }}
                        visible={false}
                        overlay={[
                          (<Popover.Item key="4"><img src={Antipathy} alt=""/>踩</Popover.Item>),
                          (<Popover.Item key="5"><img src={report} alt=""style={{width:".2rem"}}/>举报</Popover.Item>),
                        ]}
                        align={{
                          overflow: { adjustY: 5, adjustX: -20},
                          offset: [-20, 0],
                        }}
                        onVisibleChange={this.handleVisibleChange}
                        onSelect={this.onSelect}
                    
                      >
                        <div style={{
                          height: '100%',
                          padding: '0 15px',
                          marginRight: '-20px',
                          display: 'flex',
                          alignItems: 'center',
                          color:"#aaa",
                          fontSize:".11rem"
                        }}
                        >
                          <Icon type="ellipsis" />
                        </div>
                      </Popover>
                    }
                  >           
                  </NavBar>
                  <div className="hotCommit-main">
                    <div className="hotCommit-content">{itemValue.commentText}</div>
                    <div className="hotCommit-bot">
                        <div className="commit-time">{itemValue.commentTime}</div>
                        <div className="commit-bf">
                          <div className="commit-praise">
                            <div className="Copraise-bn" >{itemValue.commentType===0?<img src={praiseCo } alt=""/>:<img src={praiseCoEnd } alt=""/>}</div>
                            <span>{itemValue.commentCount}</span>
                          </div>
                          <div className="commit-bn" >
                            <img src={commit}alt=""/>
                          </div>
                        </div>
                    </div>
                  </div>
                  </div>
                </div>
              )
            })}
            
          </div>
        </div>
      </DetailWrap>
    )
  }
}
export default PageDetailUi