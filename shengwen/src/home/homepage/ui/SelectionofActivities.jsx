import React, { Component } from 'react'
import  {
  Carousel
} from 'antd-mobile';

import {ActivitiesWrap} from './PageHomeStyle'
import {withRouter} from "react-router-dom"
@withRouter
class SelectionofActivities extends Component {
 
  handleClick=(data)=>{  
    //  let {history,detailList}=this.props
    //  history.push('/detail',{data,detailList})
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
            return <div key={item.articleId} className="active-img" onClick={this.handleClick.bind(this,item)}>
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