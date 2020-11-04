import styled from "styled-components";

const DetailWrap=styled.div`
    height: 100%;
    .detail-nav{
      width: 100%,
      background:#0080ff;
      position: relative;
      margin-top:.22rem;
      margin-left: .1rem;
      margin-right: .1rem;
      .detail-re{
        float:left;
        width: .2rem;
        height: .2rem;
      }
      .detail-fo{
        float:right;
        width: .2rem;
        height: .2rem;
      }
    }
    .detailBk{
      position: absolute;
      top:0;
      height: 100%;
      width: 100%;
      >img{
        width: 100%;
        height: 2.2rem;
      }
    }
    .detail-main{
      height: 100%;
      position:absolute;
      width: 100%;
      margin-top:1.8rem ;
      padding-left:.14rem;
      padding-right:.14rem;
      width: 100%;
      background:#ffffff;
      border-radius:.2rem;
      .main-title{
        height: .45rem;
        padding-top:.22rem;
        font-size:.18rem;
      }
      .author-card{
        margin-top: .15rem;
        display:block;
        height: .65rem;
        border-bottom:1px solid #888888;
        .author-head{
          float:left;
          width: .4rem;
          height:.4rem;
        }
        .author-info{
          float:left;
          width:1.75rem;
          font-size:.1rem;
          margin-left: .1rem;
          .author-name{
            padding-bottom:.05rem;
          }
        }
        .follow-bn{
          float:right;
          width: .65rem;
          height: .26rem;
          background:#0080ff;
          text-align:center;
          border-radius:.1rem;
          margin-top:.1rem;
        }
      }
      .article-main{
        height: 100%;
        font-size:.1rem;
        padding-top:.22rem;
      }
    }
    .detail-footer{
      height: .62rem;
      border-top: 1px solid #888888;
    }
`

export {
  DetailWrap
}