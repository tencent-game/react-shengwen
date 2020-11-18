import styled from 'styled-components'

const DynamicHeaderCss = styled.div `
  width:100%;
  height:.44rem;
  ul{
    width:100%;
    height:100%;
    position:sticky;
    top:0;
    li{
      float:left;
      line-height:.4rem;
      font-size:.14rem;
      color:#ccc;
      margin-left:.15rem;
      &.active{
        font-size:.24rem;
        color:#000;
        border-bottom:4px solid rgb(61,126,255);
        font-weight:bolder;
      }
    }
  }
`
const DynamicContentCss = styled.div `
  width:100%;
  height:100%;
  overflow-y:scroll;
  padding-bottom:.5rem;
  .ulcontent{
    width:100%;
    padding:.1rem;
    background:#eee;
    .licontent{
      width:100%;
      height:3rem;
      background:#fff;
      margin-bottom:.1rem;
      border-radius:.2rem;
      position:relative;
    }
  }
`

const DynamicInfoHeaderCss = styled.div `
  height:.6rem;
  padding:.15rem 0 0 .1rem;
  display:flex;
  width:100%;
  justify-content:space-between;
  align-items:center;
  .dynamicleft{
    height:.44rem;
    display:flex;
    .image{
      width:.4rem;
      height:.4rem;
      margin-right:.1rem;
      img{
        width:100%;
        height:100%;
        border-radius:.4rem;
      }
    }
    .describe{
      width:1.2rem;
      backgroud:red;
      height:.44rem;
      span{
        font-size:.14rem;
        color:#333;
      }
      p{
        font-size:.12rem;
        color:#999;
      }
    }      
  }
  
`

const DynamicInfoCss = styled.div `
  width:100%;
  height:.85rem;
  padding:.1rem .1rem .05rem .1rem;
  text-indent:.24rem;
  over-flow:hidden;
  .message{
    width:100%;
    height:100%;
    overflow:hidden;
    p{
      width:100%;
      height:100%;
      font-size:.12rem;
      overflow:hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp:4;
      -webkit-box-orient: vertical;
    }
  }
  .images{
    width:100%;
    height:1rem;
    padding-top:.1rem;
    display:flex;
    justify-content:space-between;
    img{
      width:1rem;
      height:.82rem;
      display:block;  
    }
  }
`
const DynamicFooterCss= styled.ul `
  width:100%;
  display:flex;
  justify-content:space-around;
  position:absolute;
  bottom:.1rem;
  li{
    display:flex;
    width:.5rem;  
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    img{
      width:.2rem;
      height:.2rem;
      display:block;
    }
    span{
      text-align:center;
      width:100%;
      font-size:.12rem;
      text-indent:0;
    }
  }
`
const DynamicDetailFooterCss = styled.div `
  height:.45rem;
  width:100%;
  background:#fff;
  position:absolute;
  bottom:0;
  left:0;
  cursor:pointer;
  display:flex;
  .replay{
    position:absolute;
    width:2.5rem;
    height:.4rem;
    right:0;
    bottom:0;
  }
`
const AddCommentCss = styled.div `
  width:1.24rem;
  height:.3rem;
  border-width:0;
  position:absolute;
  background-color:rgba(242,242,242);
  border-radius:.3rem;
  text-align:center;
  left:.1rem;
  span{
    width: 90px;
    height: 25px;
    line-height:.3rem;
    background-color: transparent;
    font-family: '思源黑体';
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    text-decoration: none;
    color: rgb(51, 51, 51);
    text-align: left;
    border-color: transparent;
    outline-style: none;
  }
}
`

const DynamicDetailCommentCss = styled.div `
  width:100%;
  padding:0.1rem;
  margin-top:1rem;
  .commentleft{
    width:.3rem;
    padding-top:.1rem;
    float:left;
    .images{
      width:.3rem;
      height:.3rem;
      img{
        width:100%;
        height:100%;
        display:block;
        border-radius:.3rem;
      }
    }
  }
  .commentright{
    width:3.2rem;
    padding:.08rem 0 0 .4rem;
    .header{
      display:flex;
      justify-content:space-between;
      >p{
        font-size:.12rem;
        color:#bbb;
      }
    }
    .firstcommentinfo{
      width:100%;
      >p{
        font-size:.14rem
      }
    }
    .firstcommentdetail{
      display:flex;
      justify-content:space-between;
      height:.2rem;
      margin-top:.1rem; 
      >p{
        font-size:.12rem;
      }
      >span{
        display:flex;
        justify-content:center;
        align-items:center;
        img{
          width:.16rem;
          height:.16rem;
          margin-left:.2rem;
        }
      }
    }
    .replayinfo{
      width:100%;
      height:1rem;
      background:rgba(242, 242, 242, 1);
      padding:.1rem;
    }
    

  }
`

const DispatchDynamicInfoCss = styled.div `
  width:100%;
  padding:.1rem .15rem; 
  .dispatch{
    text-align:center;
    textarea{
      width:100%;
      height:1rem;
      outline:none;
      resize:none;
      border:none;
    }
  }
`

const ForwardDynamicCss = styled.div `
  width:100%;
  padding:.1rem .15rem;
  height:1rem;
  .forward{
    width:100%;
    height:100%;
    background:#eee;
    >span{
      display:inline-block;
      font-size:.14rem;
      font-weight:700;
      >p{
        display:inline-block;
        font-size:.12rem;
        font-weight:normal;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`

export {
  DynamicHeaderCss,
  DynamicContentCss,
  DynamicInfoHeaderCss,
  DynamicInfoCss,
  DynamicFooterCss,
  DynamicDetailFooterCss,
  AddCommentCss,
  DynamicDetailCommentCss,
  DispatchDynamicInfoCss,
  ForwardDynamicCss
}