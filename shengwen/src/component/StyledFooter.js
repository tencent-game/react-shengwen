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
  bottom: 0;
  width: 100%;
  height: .44rem;
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
      }
      .dynamic {
        width: .21rem;
        height: .21rem;
        background-image: url("${dynamic}");        
      }
      .message {
        width: .19rem;
        height: .2rem;
        background-image: url("${message}");                
      }
      .my {
        width: .16rem;
        height: .19rem;
        background-image: url("${my}");        
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