import border from "@/styles/border";
import styled from "styled-components";

const StyledEditInfoList = styled.div`
  height: 100%;
  .split-line {
    width: 100%;
    height: .1rem;
    background-color: rgba(242, 242, 242, 1);
  }
  ul {
    padding: 0 .12rem;
  }
  .field {
    padding: .2rem .12rem .3rem .12rem;
    h3 {
      font-size: .18rem;
      font-weight: 700;
      padding-bottom: .18rem;
    }
    ul {
      display: flex;
      justify-content: flex-start;
      li {
        width: .68rem;
        height: .32rem;
        background-color: rgba(61, 126, 255, 0.388235294117647);
        border-radius: .04rem;
        color: #ffffff;
        line-height: .32rem;
        text-align: center;
        margin-right: .16rem;
      }
      li:last-child {
        background-color: rgba(61, 126, 255, 1);
      }
    }
  }
`

const StyledEditInfoItem = border(
  styled.div`
    display: flex;
    height: .5rem;
    justify-content: center;
    line-height: .5rem;
    .left {
      flex: 1;
    }
    .center {
      color: #999999;
      font-size: .12rem;
    }
    .right {
      margin-left: .1rem;
      width: .08rem;
      height: .12rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  `
)
export {
  StyledEditInfoItem,
  StyledEditInfoList
}