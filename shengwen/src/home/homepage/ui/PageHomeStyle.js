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
   height: 100%;
  .art-card{
    height: 1.35rem;
    width: 100%;
    padding-left:.14rem;
    padding-top:.17rem ;
    border-bottom:1px solid #888888;
    .art-left{
      position: relative;
      float:left;
      width: 2.01rem;
      padding-left:.1rem
      .art-left-top{
        font-size:.12rem;
        width: 1.78rem;
        height: 1.2rem;
      }
     .art-left-bn{
      position:absolute;
      top:.8rem;
      height: .14rem;
      width: 2.01rem;
      .art-left-bot{
        float:left;
        width: .7rem;
        .img-watch{
          float:left;
          display:block;
          width: .18rem;
          height: .14rem;
          padding-top:.2rem
        }
        >span{
          display:block;
          font-size:.1rem;
          color:#aaaa
        }
      }
      .art-left-ri{
        float:right;
        margin-right:.1rem;
        >span{
          display:block;
          float:right;
          font-size:.1rem;
          color:#aaaa
        }
      }
     }
    }
    .art-right{
      float:left;
      height: 1.02rem;
      width: 1.42rem;
      border-radius:.1rem;
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
    width: 1.4rem;
    height: 1.47rem;
    border：1px solid #888888;
    box-shadow: .04rem .04rem .02rem .02rem #888888;
    >img{
      width: 1.4rem;
      height: .95rem;
    }
    .activeTitle{
      margin-top:.13rem;
      height: .4rem;
      font-size:.1rem;
      
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
    position: relative;
    float:right;
    width: 2.01rem;
    padding-left:.1rem
    .art-right-top{
      font-size:.15rem;
      width: 1.78rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .art-bn{
      position:absolute;
      top:.8rem;
      height: .14rem;
      width: 2.01rem;
      .art-right-bot{
        float:left;  
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
        padding-top:.2rem
        float:right;
        >span{
          display:block;
          float:right;
          margin-right:.1rem;
          font-size:.1rem;
          color:#aaaa
        }
      }
    }
  }
  .art-left{
    float:left;
    height: 1.02rem;
    width: 1.42rem;
    padding-left:.1rem
  }
}
`


export{
  HeaderWrap,
  SwiperWrap,
  ArtListWrap,
  ActivitiesWrap,
  FieldWrap,
}