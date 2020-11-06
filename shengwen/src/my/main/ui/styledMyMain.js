import styled from "styled-components";

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
        border: 0!important;
      }
      .am-list-body::after {
        border: 0!important;
      }
      .am-list-line {
      border: 0!important;
      }
      span {
      font-size: .14rem;
      }
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
       width: 100%;
       height: 100%;
       border-radius: 50%;
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

export {
  StyledMyPage,
  StyledMyAvatarLogin,
  StyledMyAvatar
}