import styled from "styled-components";

const HeaderWrap=styled.div`
  background:#ffffff;
  box-sizing: border-box;
  height : .47rem;
  width :100%;
  line-height: .47rem;
  z-index: 9999;
    .my-drawer {
      height: 100%;
      position: relative;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar {
      background-color: #fff;
      height: 100%;
      -webkit-overflow-scrolling: touch;
    }
    .my-drawer .am-drawer-sidebar .am-list {
      padding: 0;
      height: 100%,
    }
    .my-drawer .am-drawer-sidebar .am-list  .am-list-body{
      display: grid;
      height: 100%;
      grid-template-columns: repeat(3, 1.03rem);
      grid-template-rows: repeat(5, .5rem);
      grid-row-gap: .2rem;
      grid-column-gap: .2rem;
      justify-content:center;
      
    }
    .my-drawer .am-drawer-sidebar .am-list  .am-list-body .am-list-item{
      width: 1.03rem;
      height: .5rem;
      border: 1px solid #0080ff;
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
  .active-img{
    border：1px solid #888888;
    box-shadow: .04rem .04rem .02rem .02rem #888888;
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