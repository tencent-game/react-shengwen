import styled from "styled-components";

const HeaderWrap=styled.div`
  position: relative
  box-sizing: border-box;
  height : .47rem;
  width :100%;
  line-height: .47rem;
  h1{
    position: absolute;
    float:left;
    line-height: .46rem;
    padding-left: .1rem;
    font-size:.24rem;
    font-weight：700;
  } 
  >div{
    float:right;
    width: .72rem;
    padding-right:.1rem;
    padding-top:.12rem;
    .menu{
      float:left;     
      height: .23rem;
      width: .23rem;
    }
    .search{
      float:right;
      height: .23rem;
      width: .23rem;
    }
  }
  
`
const SwiperWrap=styled.div`
  height: 0;
  font-size:0;
  padding-bottom: 66.6666667%;
  position: relative;
`
export{
  HeaderWrap,
  SwiperWrap
}