import styled from "styled-components";

const SearchWrap=styled.div`
  height: 100%;
  .historyRecords{
    margin-left: .2rem;
    margin-right: .2rem;
    .his-header{
      display:block;
      margin-top:.4rem;
      >span{
        font-size:.14rem;
        width: .5rem;
        height:.14rem;
      }
      .delete-img{
        width:.22rem;
        height:.22rem;
        float:right;
      }
    }
    .his-main{
      height: 100%;
      >ul{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:space-around;
        >li{
          background:#f2f2f2;
          padding:.08rem .25rem;
          font-size:.12rem;
          margin-bottom: .15rem;
          margin-top: .1rem;
        }
      }
    }
  }
  .HotSearch{
    margin-left: .2rem;
    margin-right: .2rem;
    .sea-header{
      display:block;
      margin-top:.4rem;
      >span{
        font-size:.14rem;
        width: .5rem;
        height:.14rem;
      }
    }
    .sea-main{
      height: 100%;
      >ul{
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content:space-around;
        >li{
          background:#f2f2f2;
          font-size:.12rem;
          width: .7rem;
          height: .26rem;
          margin-bottom: .15rem;
          margin-top: .1rem;
          display:table-cell;
          text-align:center; 
          align-content:center;   
        }
      }
    }
  }
`
const SearchResultWrap=styled.div`
  height: 100%;
  .author-total{
    margin-left: .2rem;
    margin-right: .2rem;
    .author-header{
      display:block;
      height:.2rem;
      margin-top:.4rem;
      .author{
        font-size:.18rem;
        width: .5rem;
        height:.2rem;
        float:left;
        
      }
      .more{
        float:right;
        width: .5rem;
        height:.2rem;
        font-size:.14rem;
        font-color:#c0c0c0;
      }
    }
    .author-main{ 
      height: 100%;
      margin-top: .1rem;
      .author-card{
        margin-top: .15rem;
        display:block;
        height: .65rem;
        border-bottom:1px solid #888888;
        .author-head{
          float:left;
          width: .4rem;
          height:.4rem;
          border-radius: 50%;
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
    }
  }
  .article-total{
    margin-left: .2rem;
    margin-right: .2rem;
    .article-header{
      display:block;
      height:.2rem;
      margin-top:.1rem;
      .article{
        font-size:.18rem;
        width: .5rem;
        height:.2rem;
        float:left;
      }
      .more{
        float:right;
        width: .5rem;
        height:.2rem;
        font-size:.14rem;
        font-color:#c0c0c0;
      }
    }
    .article-main{
      height: 100%;
      .article-card{
        height: .6rem;
        margin-top: .15rem;
        border-bottom:1px solid #888888;
        .article-introduction{
          font-size:.15rem;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space:nowrap;
        }
        .article-writer{
          margin-top:.1rem;
          float:left;
          width: .6rem;
          height: .25rem;
          font-size:.1rem;
          
        }
        .article-day{
          margin-top:.1rem;
          width: 2rem;
          height: .2rem;
          float:left;
          font-size:.1rem;
          margin-left: .4rem;
        }
      }
    }
  }  
`
const AuthorWrap=styled.div`
.author-main{ 
  margin-left: .2rem;
  margin-right: .2rem;
  height: 100%;
  margin-top: .1rem;
  .author-card{
    margin-top: .15rem;
    display:block;
    height: .65rem;
    border-bottom:1px solid #888888;
    .author-head{
      float:left;
      width: .4rem;
      height:.4rem;
      border-radius:50% ;
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
`
const ArticleWrap=styled.div`
  .article-main{
    height: 100%;
    margin-left: .2rem;
    margin-right: .2rem;
    .article-card{
      height: .65rem;
      margin-top: .15rem;
      border-bottom:1px solid #888888;
      .article-introduction{
        font-size:.15rem;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
      }
      .article-writer{
        margin-top:.1rem;
        float:left;
        width: .6rem;
        height: .25rem;
        font-size:.1rem;
        
      }
      .article-day{
        margin-top:.1rem;
        width: 2rem;
        height: .2rem;
        float:left;
        font-size:.1rem;
        margin-left: .4rem;
      }
    }
`
const NorResultWrap=styled.div`

`

export{
  SearchWrap,
  SearchResultWrap,
  AuthorWrap,
  ArticleWrap,
  NorResultWrap
}