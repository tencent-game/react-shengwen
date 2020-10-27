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
  bottom: .6rem;
  p {
    padding-top: .1rem;
    text-align: center;
  }
`

export {
  IconsContainer,
  H1NavBar
}