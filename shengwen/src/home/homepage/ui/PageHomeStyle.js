import styled from "styled-components";

const HeaderWrap=styled.div`
  background:#ffffff;
  box-sizing: border-box;
  height : .47rem;
  width :100%;
  line-height: .47rem;
  z-index: 9999; 
    .popup-list {
      display: grid;
      height: 100%;
      grid-template-columns: repeat(3, 1.03rem);
      grid-template-rows: repeat(5, .5rem);
      grid-row-gap: .2rem;
      grid-column-gap: .2rem;
      justify-content:center;
    }
  
  
`
const SwiperWrap=styled.div`
  height: 0;
  font-size:0;
  padding-bottom: 50%;
  position: relative;
`
const ArtListWrap=styled.div`
  .art-card{
    height: 1.35rem;
    width: 100%;
    padding-left:.14rem;
    padding-top:.17rem ;
    border-bottom:1px solid #888888;
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
  .active-img{
    border：1px solid #888888;
    box-shadow: .04rem .04rem .02rem .02rem #888888;
    img{
      width: 100%;
    }
  }
`
const FieldWrap=styled.div`
  .art-card{
    height: 1.35rem;
    width: 100%;
    padding-left:.14rem;
    padding-top:.17rem ;
    border-bottom:1px solid #888888;
    .art-right{
      float:right;
      width: 2.01rem;
      .art-right-top{
        font-size:.12rem;
        width: 1.78rem;
      }
      .art-right-bot{
        padding-top: .5rem;
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
      .art-right-ri{
        >span{
          display:block;
          float:right;
          margin-right:.1rem;
          font-size:.1rem;
          color:#aaaa
        }
      }
    }
    .art-left{
      float:left;
      height: 1.02rem;
      width: 1.42rem;
      padding-left:.1rem
      >img{
        height: 1.02rem;
      width: 1.42rem;
      }
    }
  }
  .art-modular{
    height: 1.7rem;
    width: 100%;
    padding-left:.14rem;
    padding-top:.17rem ;
    border-bottom:1px solid #888888;
    .modular-title{
      font-size:.13rem;
    }
    .modular-img{
      display:grid;
      grid-template-columns: repeat(3, 1.06rem);
      grid-row-gap: .2rem;
      justify-content:space-around  ;
      >div{
        float:left;
        >img{
          width: 1.06rem;
          height: .82rem;
        }
      }
    }
    .modular-right-bot{
      padding:.2rem;
      float:left;
      height: .14rem;
      .modular-watch{
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
    .modular-right-ri{
      margin-left:1.1rem;
      padding:.2rem;
      height: .1rem;
      >span{
        display:block;
        float:left;
        font-size:.1rem;
        color:#aaaa
      }
    }
  }
`
export{
  HeaderWrap,
  SwiperWrap,
  ArtListWrap,
  ActivitiesWrap,
  FieldWrap
}