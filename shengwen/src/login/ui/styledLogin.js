import styled from "styled-components"

const H1NavBar = styled.h1`
  text-align: center;
  padding-top: .64rem;
  font-size: .2rem;
  font-weight: 400;
  padding-bottom: .4rem;
  height: 1.4rem;
`

const IconsContainer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 10%;
  p {
    padding-top: .1rem;
    text-align: center;
  }
`

const PhoneLogin = styled.div`
  margin-top: .6rem;
  padding: 0 .36rem;
  h1 {
    text-align: center;
    font-size: .2rem;
    font-weight: 400;
    margin-bottom: .4rem;
  }
  .phone-login {
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .check {
      width: .6rem;
      height: 100%;
      line-height: .5rem;
    }
    input {
      height: 100%;
      border: 0;
      flex: 1;
      
    }
  }
`

export {
  IconsContainer,
  H1NavBar,
  PhoneLogin
}