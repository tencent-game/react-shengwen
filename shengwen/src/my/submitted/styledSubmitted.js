import styled from "styled-components";

// 我的 我要投稿
const StyledSubmitted = styled.div`
  .add-img {
    height: 2rem;
    background-color: rgba(242, 242, 242, 0.376470588235294);;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3 {
      font-weight: 400;
    }
    span {
      font-size: .12rem;
      color: #999999;
      padding-top: .1rem;
    }
  }
  .submitted-input {
    padding: 0 .12rem;
  }
`

export {
  StyledSubmitted
}