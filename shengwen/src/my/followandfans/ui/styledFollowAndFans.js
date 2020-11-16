import border from "../../../styles/border";
import styled from "styled-components";

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

export {
  StyledMyPublicMain,
  StyledMyPublicMainItem,
  StyledMyPublicTop
}