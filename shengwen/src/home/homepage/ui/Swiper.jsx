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
  render() {
    return (
      <SwiperWrap>
        <Carousel
          autoplay={true}
          infinite
          dots={false}
        >
          <img src={swiper1} alt=""/>
          <img src={swiper2} alt=""/>
          <img src={swiper3} alt=""/>
        </Carousel>
      </SwiperWrap>
    )
  }
}


