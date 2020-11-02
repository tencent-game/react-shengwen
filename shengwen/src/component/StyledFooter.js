import styled from "styled-components"
import home from "../assets/img/home.png"
import homeActive from "../assets/img/active-home.png"
import dynamic from "../assets/img/dynamic.png"
import dynamicActive from "../assets/img/active-dynamic.png"
import message from "../assets/img/message.png"
import messageActive from "../assets/img/message-active.png"
import my from "../assets/img/my.png"
import myActive from "../assets/img/my-active.png"

const StyledFooter = styled.div`
  position: absolute;
  z-index: 999;
  background-color: #fff;
  bottom: 0;
  width: 100%;
  height: .5rem;
  line-height: .5rem;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    li {
      width: 25%;
      div {
        display: inline-block;
      }
      .home {
        width: .18rem;
        height: .19rem;
        background-image: url("${home}");
        background-size: .18rem .19rem;
      }
      .dynamic {
        width: .21rem;
        height: .21rem;
        background-image: url("${dynamic}");
        background-size: .21rem;
      }
      .message {
        width: .19rem;
        height: .2rem;
        background-image: url("${message}");
        background-size: .19rem .2rem;
      }
      .my {
        width: .16rem;
        height: .19rem;
        background-image: url("${my}");
        background-size: .16rem .19rem;
      }
    }
    li.active {
      .home {
        background-image: url("${homeActive}");
      }
      .dynamic {
        background-image: url("${dynamicActive}");        
      }
      .message {
        background-image: url("${messageActive}");
      }
      .my {
        background-image: url("${myActive}");
      }
    }
  }
`

export {
  StyledFooter
}