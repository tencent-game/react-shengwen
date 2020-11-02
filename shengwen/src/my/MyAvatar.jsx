import React from 'react';
import {useHistory} from "react-router-dom"
import {StyledMyAvatar} from "./styledMy"
import defaultImg from "../assets/img/u4206.png"

function MyAvatar(props) {
  const history = useHistory()
  return (
    <StyledMyAvatar>
      <div>
        <img src={defaultImg} alt=""/>
      </div>
      <span onClick={() => history.push("/login")}>登录/注册</span>
    </StyledMyAvatar>
  );
}

export default MyAvatar;