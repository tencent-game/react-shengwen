import React, { Component } from 'react'
import {get} from '@/utils/http.js'
import  {
  Carousel
} from 'antd-mobile';
import {
  SwiperWrap
} from './PageHomeStyle';


class Swiper extends Component {
  constructor (props){
    super(props)
    this.state={
      swiperList:[]
   } 
  }
  async componentDidMount(){
    let result= await get (
      '/api/carousels'
    )
    
      this.setState({
        swiperList:result.data.data.carousels
      })
  }
  render() {
    // console.log(this.state.swiperList);
    return (
      <SwiperWrap οnClick={this.loadSwiper}>
        <Carousel
          selectedIndex={2}
          autoplay={true}
          infinite
          dots={false}
      
        >
          {this.state.swiperList&&this.state.swiperList.map((item)=>{
            return(
              <img src={item.carouselSrc} key={item.carouselId} alt="" style={{
                // height: "1.7rem",
                //  width: "3.48rem",
              }} />
            )
          })}
        </Carousel>
      </SwiperWrap>
    )
  }
}
export default Swiper

