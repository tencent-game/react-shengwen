import React, { Component } from 'react'

import  {
  Carousel
} from 'antd-mobile';
import swiper1 from '@a/img/homepage/swiper1.png';
import swiper2 from '@a/img/homepage/swiper2.png';
import swiper3 from '@a/img/homepage/swiper3.png';
import {
  SwiperWrap
} from './PageHomeStyle';

export default class Swiper extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[
        {img:swiper1},
        {img:swiper2},
        {img:swiper3}
      ]
    }
  }
  render() {
    return (
      <SwiperWrap>
        <Carousel
          selectedIndex={2}
          autoplay={true}
          infinite
          dots={false}

        >
          {this.state.data.map((item,index)=>{
            return<img key={index} src={item.img} alt=""/>
          })}
        </Carousel>
      </SwiperWrap>
    )
  }
}


