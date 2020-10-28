import React, { Component } from 'react'
import  {
  Carousel
} from 'antd-mobile';

import {ActivitiesWrap} from './PageHomeStyle'

import active1 from '@a/img/homepage/active-1.png'
import active2 from '@a/img/homepage/active-2.png'
import active3 from '@a/img/homepage/active-3.png'
import active4 from '@a/img/homepage/active-4.png'

export default class SelectionofActivities extends Component {
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
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => this.setState({ slideIndex: index })}
        >
          <div>
            <img src={active1 } alt=""/>
            <span>全栈工程师线下培训课程</span>
          </div>
          <div>
            <img src={active2 } alt=""/>
            <span>全栈工程师线下培训课程</span>
          </div>
          <div>
            <img src={active3 } alt=""/>
            <span>全栈工程师线下培训课程</span>
          </div>
          <div>
            <img src={active4 } alt=""/>
            <span>全栈工程师线下培训课程</span>
          </div>
        </Carousel>
      </ActivitiesWrap>
    )
  }
}
