import React, { Component } from 'react'
import  {
  Carousel
} from 'antd-mobile';

import {ActivitiesWrap} from './PageHomeStyle'
import {withRouter} from "react-router-dom"
@withRouter
class SelectionofActivities extends Component {
 
  handleClick=()=>{
    // console.log(this.props);
    let {history}=this.props
    history.push('/detail')
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
            return <div key={item.id} className="active-img" onClick={this.handleClick}>
                <img src={item.img[0]} alt=""/>
                <span className="activeTitle">{item.title}</span>
            </div>
         })}
        </Carousel>
      </ActivitiesWrap>
    )
  }
}
export default SelectionofActivities 