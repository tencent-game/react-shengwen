import styled from "styled-components";

const HeaderWrap=styled.div`
  position: sticky;
  top: 0;
  background:#ffffff;
  box-sizing: border-box;
  height : .47rem;
  width :100%;
  line-height: .47rem;
  z-index: 9999;
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
  padding-bottom: 50%;
  position: relative;
`
const ArtListWrap=styled.div`
  height: 1.35rem;
  width: 100%;
  padding-left:.14rem;
  padding-top:.17rem ;
  .art-left{
    float:left;
    width: 2.01rem;
    padding-left:.1rem
    .art-left-top{
      font-size:.12rem;
      width: 1.78rem;
    }
    .art-left-bot{
      padding-top: .42rem;
      height: .14rem;
      .img-watch{
        float:left;
        display:block;
        width: .18rem;
        height: .14rem;
        padding-top:.2rem
      }
      >span{
        font-size:.1rem;
        color:#aaaa
      }
    }
    .art-left-ri{
      >span{
        display:block;
        float:right;
        font-size:.1rem;
        color:#aaaa
      }
    }
  }
  .art-right{
    float:left;
    height: 1.02rem;
    width: 1.42rem;
    
  }
`
const ActivitiesWrap=styled.div`
  height: 2.13rem;
  width: 100%;
  background:#f7fbff;
  h1{
    padding-top:.1rem;
    padding-bottom:.1rem;
  }
  div{
    box-shadow: .06rem .06rem .03rem #888888;
    img{
      width: 100%;
    }
  }
`
export{
  HeaderWrap,
  SwiperWrap,
  ArtListWrap,
  ActivitiesWrap,
}