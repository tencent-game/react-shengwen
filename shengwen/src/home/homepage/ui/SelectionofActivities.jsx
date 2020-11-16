import React, { Component } from 'react'
import  {
  Carousel
} from 'antd-mobile';
import {post} from '@/utils/http.js'
import {ActivitiesWrap} from './PageHomeStyle'
import {withRouter} from "react-router-dom"
@withRouter
class SelectionofActivities extends Component {
 
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
    return (
      <ActivitiesWrap>
        <h1>活动精选</h1>
        <Carousel

          infinite
          selectedIndex={2}
          dots={false}
          cellSpacing={15}
          slideWidth={0.4}
          
        >
         {this.props.list.map(item=>{
            return <div key={item.articleId} className="active-img" onClick={this.handleDetail.bind(this,item)}>
                <img src={item.articleCover} alt=""/>
                <span className="activeTitle">{item.articleHeadline}</span>
            </div>
         })}
        </Carousel>
      </ActivitiesWrap>
    )
  }
}
export default SelectionofActivities 