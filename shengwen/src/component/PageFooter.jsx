import React from 'react';
import {StyledFooter} from "./StyledFooter"
import {useHistory} from "react-router-dom"

function PageFooter(props) {
  let history = useHistory()
  return (
    <StyledFooter>
      <ul>
        <li
          className={history.location.pathname === "/home" ? "active" : ""}
          onClick={() => {
            history.push("/home")
          }}
        >
          <div className="home"/>
        </li>
        <li
          className={history.location.pathname.match(/^(\/dynamic).*?/)  ? "active" : ""}
          onClick={() => {
            history.push("/dynamic/hot")
          }}
        >
          <div className="dynamic"/>
        </li>
        <li
          className={history.location.pathname === "/message" ? "active" : ""}
          onClick={() => {
            history.push("/message")
          }}
        >
          <div className="message"/>
        </li>
        <li
          className={history.location.pathname === "/my" ? "active" : ""}
          onClick={() => {
            history.push("/my")
          }}
        >
          <div className="my"/>
        </li>
      </ul>
    </StyledFooter>
  );
}

export default PageFooter;