import styled from 'styled-components'

const DynamicHeaderCss = styled.div `
  width:100%;
  height:.44rem;
  ul{
    width:100%;
    height:100%;
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
  padding-bottom:.8rem;
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
  height:.5rem;
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
  height:.85rem;
  position:absolute;
  bottom:0;
`

export {
  DynamicHeaderCss,
  DynamicContentCss,
  DynamicInfoHeaderCss,
  DynamicInfoCss,
  DynamicFooterCss,
  DynamicDetailFooterCss
}