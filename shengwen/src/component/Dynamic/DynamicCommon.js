import styled  from 'styled-components'

const FollowBtnCss = styled.div `
  width: .66rem;
  height: .26rem;
  display:block;
  line-height:.44rem;
  padding-left:.25rem;
  div{
    width: .66rem;
    height: .26rem;
    lineheight:.44rem;
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
    &.active {
      background-color: rgba(61, 126, 255, 1);
    }
  }
  
  
`

export {
  FollowBtnCss
}