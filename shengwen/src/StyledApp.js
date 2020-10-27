import styled from "styled-components"
// import home from "./assets/img/home.png"
// import dynamic from "./assets/img/dynamic.png"

const NavBar = styled.div`
  width: 100%;
  height: .44rem;
  position: absolute;
  bottom: 0;
  border-top: 1px solid rgba(242, 242, 242, 1);
  ul {
    display: flex;
    flex-direction: row;
    li {
      width: 25%;
      text-align: center;
      line-height: .44rem;
    }
    .active {
      color: red;
    }
  }
  
`

export {
  NavBar
}