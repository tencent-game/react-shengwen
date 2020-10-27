import styled from "styled-components"
import border from "../styles/border";

// my主页面样式
const StyledMyPage = styled.div`
    background-color: rgba(61, 126, 255, 1);
    color: #ffffff;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    h1 {
      margin: 0;
      padding-top: .1rem;
    }
    span {
      width: .8rem;
      height: .24rem;
      display: inline-block;
    }
    .my-list {
      padding-top: .2rem;
      border-top-left-radius: .2rem;
      border-top-right-radius: .2rem;
      flex: 1;
      font-weight: 700;
      background-color: #ffffff;
      .am-list-body::before {
        border: 0;!important;
      }
      .am-list-body::after {
        border: 0;!important;
      }
      .am-list-line {
      border: 0;!important
      }
      span {
      font-size: .14rem;
      }
    }
`

// 未登录状态下头像部分样式
const StyledMyAvatar = styled.div`
  align-items: center;
  display: flex;
  padding-top: .28rem;
  padding-bottom: .18rem;
  div {
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
  }
  span {
    padding-left: .12rem;
    font-size: .18rem;
    flex: 1;
    font-weight: 700;
  }
`

// 登陆下头像部分样式
const StyledMyAvatarLogin = styled.div`
  .avatar-top {
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
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
    .avatar-top-center {
      flex: 1;
      padding-left: .08rem;
      h3 {
        font-size: .14rem;
      }
      span {
        width: 100%;
        padding-top: .1rem;
        font-size: .12rem;
      }
    }
    .avatar-top-right {
      width: .9rem;
      text-align: right;
      font-size: .12rem;
      display: flex;
      flex-direction: row;
    }
  }
  .avatar-bottom {
    height: .8rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: .2rem;
    .avatar-bottom-item {
      width: 25%;
      h4 {
        font-size: .2rem;
        font-weight: 700;
      }
      span {
        font-size: .12rem;
      }
    }
  }
`

// 我的关注&我的粉丝头部样式
const StyledMyPublicTop = styled.div`
  display: flex;
  width: 100%;
  height: .68rem;
  justify-content: center;
  align-items: center;
  .back {
    width: .5rem;
    text-align: center;
    line-height: .5rem;
    img {
      width: .18rem;
      height: .18rem;
    }
  }
  ul {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    li {
      width: 50%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        height: .62rem;
        line-height: .62rem;
        font-weight: 400;
      }
      span {
        display: inline-block;
        width: .3rem;
        height: .05rem;
      }
    }
    li.active {
      font-size: .18rem;
      color: rgb(61, 126, 255);
      text-align: center;
      h3 {
        font-size: .18rem;
        font-weight: bold;
      }
      span {
        background-color: rgb(61, 126, 255);
        border-radius: .03rem;
      }
    }
  }
`

// 我的关注&我的粉丝主体部分样式
const StyledMyPublicMain = styled.div`
  .my-title {
    padding-left: .12rem;
    color: #666666;
    height: .4rem;
    line-height: .4rem;
    background-color: rgba(215, 215, 215, 0.349019607843137);
  }
  ul {
    padding-left: .12rem;
    padding-right: .12rem;
  }
  .my-bottom {
    padding-top: .2rem;
    width: 100%;
    height: .16rem;
    text-align: center;
    line-height: .16rem;
    font-size: .12rem;
    color:#D7D7D7;
  }
`

// 我的关注&我的粉丝主体部分列表样式
const StyledMyPublicMainItem = border(
  styled.li`
    display: flex;
    align-items: center;
    flex-direction: row;
    height: .7rem;
    img[alt="avatar"] {
      width: .36rem;
      height: .36rem;
    }
    div {
      flex: 1;
      padding-left: .1rem;
      h4 {
        font-weight: 700;
        color: #3D7EFF;
      }
      span {
        font-size: .12rem;
        color: #666666;
      }
    }
    button {
      width: .66rem;
      height: .26rem;
      border-radius: .26rem;
      background-color: rgba(204, 204, 204, 1);
      border: none;
      color: #ffffff;
      font-size: .12rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      span {
        position: relative;
        
        img[alt="add"] {
          width: .12rem;
          height: .12rem;
          margin-right: .02rem;
          margin-bottom: .02rem;
        }
      }
    }
    button.active {
      background-color: rgba(61, 126, 255, 1);
    }
  `
)

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

export {
  StyledMyPage,
  StyledMyAvatar,
  StyledMyAvatarLogin,
  StyledMyPublicTop,
  StyledMyPublicMain,
  StyledMyPublicMainItem,
  StyledMyPersonalDataTop,
  StyledMyPersonalDataMain
}