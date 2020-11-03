// 我的个人主页底部 动态 样式
import styled from "styled-components";
import border from "../../styles/border";
import {select} from "@/assets/img/my/select.png";

const StyledMyDynamic = styled.div`
  padding: .1rem 0 0 0;
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
      font-weight: 400;
      font-size: .18rem;
      text-align: center;
    }
    img[alt="more"] {
      width: .17rem;
      height: .18rem;
    }
    span {
      color: #3D7EFF;
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
  .my-list {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: .54rem;
    margin-top: .3rem;
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

// 我的个人主页  文章
const StyledPersonalDataArticle = border(
  styled.div`
    padding: 0 .12rem;
    height: 1.44rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    .item-img {
      width: 1.45rem;
      height: 1.02rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item-text {
      padding-left: .12rem;
      height: 1.02rem;
      flex: 1;
      display: flex;
      flex-direction: column;
      p {
        flex: 1;
      }
      .item-bottom {
        height: 0.16rem;
        font-size: .12rem;
        color: #999999;
        display: flex;
        flex-direction: row;
        p {
          img {
            margin-right: .04rem;
            width: .16rem;
            height: .16rem;
          }
        }
      }
    }
  `
)

// 我的个人主页  资料
const StyledPersonalDataInfo = styled.div`
  padding-bottom: .3rem;
  margin-top: .2rem;
  .info-list {
    display: flex;
    flex-direction: column;
    li {
      height: 0.34rem;
      line-height: 0.34rem;
      display: flex;
      flex-direction: row;
      div:first-child {
        width: .8rem;
        color: #999999;
      }
      div:last-child {
        flex: 1;
      }
    }
    li:last-child {
      button {
        width: .67rem;
        height: .32rem;
        line-height: .32rem;
        background-color: rgba(61, 126, 255, 0.388235294117647);
        color: #FFFFFF;
        border: 0;
        margin-right: .16rem;
      }
    }
  }
`

export {
  StyledMyDynamic,
  StyledMyPersonalDataBottom,
  StyledMyPersonalDataMain,
  StyledMyPersonalDataTop,
  StyledPersonalDataArticle,
  StyledPersonalDataInfo
}