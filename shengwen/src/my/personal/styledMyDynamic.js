// 我的个人主页底部 动态 样式
import styled from "styled-components";
import border from "../../styles/border";

const StyledMyDynamic = styled.div`
  padding: 0 .12rem;
  .dynamic-item {
    width: 100%;
    height: 3.3rem;
    box-shadow: 2px 2px 10px rgba(215, 215, 215, 1);
    border-radius: .1rem;
    margin-bottom: .14rem;
  }
`

// 我的个人主页顶部部分
const StyledMyPersonalDataTop = border(
  styled.div`
    padding: 0 .12rem;
    width: 100%;
    height: .48rem;
    position:absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    top: 0;
    img[alt="back"] {
      width: .2rem;
      height: .2rem;
    }
    h1 {
      flex: 1;
      font-size: .18rem;
      text-align: center;
    }
    img[alt="more"] {
      width: .17rem;
      height: .18rem;
    }
  `
)

// 我的个人主页中间部分
const StyledMyPersonalDataMain = styled.div`
  padding: .16rem .12rem 0 .12rem;
  .avatar-top-left {
    position: relative;
    display: table-cell;
    width: .6rem;
    height: .6rem;
    text-align: center;
    line-height: .6rem;
    border-radius: 50%;
    background-color: #508bff;
    img {
     width: .23rem;
     height: .3rem;
    }
    img[alt=gender] {
      position: absolute;
      width: .2rem;
      height: .2rem;
      bottom: .05rem;
      right: 0;
      -moz-transform:rotate(-45deg);
      -webkit-transform:rotate(-45deg);
    }
  }
  .personal-nickname {
    padding-top: .16rem;
    padding-bottom: .28rem;
    h2 {
      font-size: .16rem;
      font-weight: 700;
    }
    span {
      color: #999999;
      font-size: .12rem;
    }
  }
  .personal-list {
    width: 100%;
    height: 75px;
    ul {
      height: 100%;
      box-shadow: 0px 5px 15px rgba(228, 228, 228, 0.349019607843137);
      border-radius: 8px;
      background-color: rgba(255, 255, 255, 1);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      li {
        width: 25%;
        h3 {
          font-size: .2rem;
          color: #333333;
          font-weight: 700;
        }
        span {
          font-size: .12rem;
          color: #999999;
        }
      }
    }
  } 
`

// 我的个人主页底部 动态 文章 资料 列表
const StyledMyPersonalDataBottom = styled.div`
  padding: 0 .12rem;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    
    height: .96rem;
    li {
      width: 16.67%;
      text-align: center;
      h3 {
        color: #999999;
        font-weight: 400;
      }
      span {
        display: inline-block;
        width: .3rem;
        height: .05rem;
        
      }
    }
    li.active {
      h3 {
        color: #333333;
        font-size: .18rem;
        font-weight: 700;
      }
      span {
        background-color: rgba(61, 126, 255, 1);
        border-radius: .03rem;
      }
    }
  }
`

export {
  StyledMyDynamic,
  StyledMyPersonalDataBottom,
  StyledMyPersonalDataMain,
  StyledMyPersonalDataTop
}