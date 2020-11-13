import styled from "styled-components";
import select from "../../assets/img/my/select.png";
import selected from "../../assets/img/my/selected.png";

const StyledFeedback = styled.div`
  .feedback-type {
    height: 1.45rem;
    padding: .18rem 0.76rem .12rem .16rem;
    div:first-child {
      span {
        color: #ff0000;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
        padding-top: .26rem;
        width: 50%;
        display: flex;
        justify-content: left;
        align-items: center;
        div {
          width: .2rem;
          height: .2rem;
          background:url("${select}");
          background-size: .2rem;
        }
        span {
          padding-left: .1rem;
        }
      }
      li.active {
        div {
          width: .2rem;
          height: .2rem;
          background:url("${selected}");
          background-size: .2rem;
        }
      }
    }
  }
  .split {
    width: 100%;
    height: .06rem;
    background-color: #f2f2f2;
  }
  .feedback-problem {
    height: 2.3rem;
    h3 {
      font-weight: 400;
      padding: .18rem 0 0 .16rem;
    }
  }
  .email {
    height: 1.04rem;
    h3 {
      font-weight: 400;
      padding: .18rem 0 0 .16rem;
    }
  }
`

export {
  StyledFeedback
}