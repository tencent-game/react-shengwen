import styled from "styled-components";

const DetailWrap=styled.div`
    height: 100%;
    position:relative;
    .detailBk{
      position:absolute;
      top:0;
      height: 2.2rem;
      width: 100%;
    
      .detail-nav{
        width: 100%,
        height: .44rem;
        padding-top:.22rem;
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
    }
    .detail-main{
      position:absolute;
      top:2rem;
      width: 100%;
      padding-left:.14rem;
      padding-right:.14rem;
      width: 100%;
      background:#ffffff;
      border-radius:.2rem;
      .main-title{
        height: .45rem;
        font-size:.18rem;
        margin-top:.2rem;
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
        .followEnd-bn{
          float:right;
          width: .65rem;
          height: .26rem;
          background:#aaa;
          text-align:center;
          border-radius:.1rem;
          margin-top:.1rem;
        }
      }
      .article-main{
        font-size:.1rem;
        padding-bottom:.2rem;
        border-bottom:1px solid #888888;
        .text-paragraph{
          margin-top:.15rem;
          >span{
            font-size:.1rem;
            font-color:#c4a699;
          }
        }
        .article-img{
          margin-top:.15rem;
          >img{
            width: 3.5rem;
            height: 2rem;
            border-radius:.1rem;
          }
        }
      }
      .appreciate_main{
        height: 2rem;
        margin-top:.16rem;
        .related-contents{
          width: 100%;
          height: .25rem;
          .related-card{
            float:left;
            margin-right:.1rem;
            background:#f2f2f2;
            width: .85rem;
            height: .25rem;
            .reCard-contents{
              float:left;
              margin-left:.1rem;
              margin-top:.03rem;
              margin-right:.08rem;
              font-size:.11rem;
              color:#0080ff;
            }
            .reCard-img{
              float:left;
            }
          }
        }
        .appreciate-bn{
          width: .9rem;
          height: .35rem;
          background:#ff9900;
          text-align:center;
          padding-top:.07rem;
          border-radius:.15rem;
          margin:.38rem auto;
          margin-bottom:.15rem;
        }
        .appreciate-header{
          position:relative;
          height: .3rem;
          width: 1.08rem;
          margin:0 auto;
          .headerBn1{
            float:left;
            position:absolute;
          }
          .headerBn2{
            float:left;
            position:absolute;
            left:.2rem;
          }
          .headerBn3{
            float:left;
            position:absolute;
            left:.4rem;
          }
          .headerBn4{
            float:left;
            position:absolute;
            left:.6rem;
          }
          .headerBn5{
            float:left;
            position:absolute;
            left:.8rem;
          }
        }
      }
      .related-reading{
       
        >h1{
          font-size:.17rem;
        }
        >div{

          height: 100%;
          .art-card{
            height: 1.35rem;
            width: 100%;
            padding-left:.1rem;
            padding-top:.17rem ;
            border-bottom:1px solid #888888;
            .art-left{
              float:left;
              width: 1.8rem;
              padding-left:.1rem
              .art-left-top{
                font-size:.12rem;
                width: 1.78rem;
                height: 1.2rem;
              }
            .art-left-bn{
              margin-top:.6rem;
              height: .14rem;
              width: 1.8rem;
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
                >span{
                  display:block;
                  margin-right:.1rem;
                  float:left;
                  font-size:.1rem;
                  color:#aaaa;
                  width: .4rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space:nowrap;
                }
              }
            }
            }
            .art-right{
              float:right;
              height: 1.02rem;
              width: 1.42rem;
              border-radius:.1rem;
            }
          }
        }
      }

      .hotCommit{
        margin-top:.4rem;
        .hotCommit-card{
          height: 1.2rem;
          .hotCommit-left{
            width: 10%;
            float:left;
            >img{
              margin-top:.1rem;
              width: .3rem;
              height: .3rem;
              border-radius:50%;
            }
          }
          .hotCommit-right{
            float:right;
            width: 90%;
            .hotCommit-main{
              .hotCommit-content{
                height: .5rem;
                font-size:.13rem;
              }
              .hotCommit-bot{
                width:100%;
                .commit-time{
                  float:left;
                  color:#aaa;
                  font-size:.1rem;
                }
                .commit-bf{
                  width: 1.2rem;
                  float:right;
                  height: .2rem;
                  .commit-praise{
                    float:left;
                    margin-right:.28rem;
                    .Copraise-bn{
                      float:left;
                      margin-right:.12rem;
                      >img{
                        width: .2rem;
                        height: .2rem;
                      }
                    }
                    >span{
                      height: .2rem;
                      margin-top:.05rem;
                      float:left;
                      color:#aaa;
                      font-size:.1rem;
                    }
                  }
                  .commit-bn{
                    width: .2rem;
                    float:right;
                    margin-right:.1rem;
                    >img{
                      width: .2rem;
                      height: .2rem;
                    }
                  }
                }
              }
  
            }
        }
        }
      }
    }
    
`
const AppreciateWrap=styled.div`
  height: 100%;
  .Appreciate-info{
    .userHeader{
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
      >img{
        width: .4rem;
        height: .4rem;
        border-radius:50% ;
      }
    }
    .userName{
      width:1rem;
      font-size:.14rem;
      margin: 0 auto;
      text-align:center;
    }
    .Appreciate-main{
      margin: 0 auto;
      width: 1.1rem;
      font-size:.11rem;
      color:#888888;
    }
  }
  .PaymentAmount{
    >ul{
      height: .95rem;
      width: 2.97rem;
      margin: .3rem auto;
      display:grid;
      grid-template-columns: repeat(3, .9rem);
      grid-template-rows: repeat(2, 50%);
      grid-row-gap: .1rem;
      grid-column-gap: .15rem;
      >li{
        height: .4rem;
        width: .9rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        border: .01rem solid #0080ff; 
      }
      .Active{
        height: .4rem;
        width: .9rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items:center;
        background:#0080ff; 
        border: .01rem solid #0080ff; 
      }
    }
    .payBn{
      width: 2.97rem;
      height: .47rem;
      background:#0080ff;
      margin:0 auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items:center;
      font-size:.15rem;
      color:#ffffff;
    }
    .PayMethod{
      width: 1.05rem;
      margin:.3rem auto;
      .pay-main{
        float:left;
        font-size:.1rem;
        width: .8rem;
        color:#888888;
      }
      .changeBn{
        color:#0080ff;
        float:left;
        font-size:.1rem;
        width: .25rem;

      }
    }
  }
`
export {
  DetailWrap,
  AppreciateWrap
}