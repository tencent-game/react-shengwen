import React, { Component } from 'react'
import {
  ArtListWrap
} from './PageHomeStyle'
import {post} from '@/utils/http.js'
import watch from '@a/img/homepage/watch.png';
import {withRouter} from "react-router-dom"
@withRouter
class ArticleList extends Component {
  
  handleDetail= async(item)=>{
    
    let result= await post ({
      url:'/api/article/content',
      data:{
        "articleId":item.articleId,
        "publisherId":item.userId
      }   
    })
    
    let data=result.data
    let {history}=this.props
    history.push('/detail',{data})
  }
  render() {
    let dayList=this.props.list&&this.props.list.map(item=>{
      let dateStart=item.articleTime
      var dateBegin = new Date(dateStart.replace(/-/g, "/"))
      let dateEnd=new Date()
      var dateDiff = dateEnd.getTime() - dateBegin.getTime()
      var dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000))
      return dayDiff
    })
    
    return (
      <ArtListWrap>
        {this.props.list&&this.props.list.map((item,index)=>{
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
      </ArtListWrap>
    )
  }
}

export default ArticleList
