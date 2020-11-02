import React from 'react';
import back from "@/assets/img/my/back.png";
import share from "@/assets/img/my/share.png";
import {useHistory} from "react-router-dom"
import {StyledMyListPublicTitle} from "./StyledMyListPublicTitle"

function MyListPublicTitle(props) {
  const history = useHistory()
  return (
    <StyledMyListPublicTitle>
      <img src={back} alt="back" onClick={() => history.goBack()}/>
      <h1>{props.title}</h1>
      {
        history.location.pathname === "/submitted" ? (
          <img src={share} alt="share" onClick={props.onShareClick}/>
        ):(<div/>)
      }
    </StyledMyListPublicTitle>
  );
}

export default MyListPublicTitle;