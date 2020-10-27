import React from 'react';
import {StyledMyAvatar} from "./styledMy"
import defaultImg from "../assets/img/u4206.png"

function MyAvatar(props) {
  return (
    <StyledMyAvatar>
      <div>
        <img src={defaultImg} alt=""/>
      </div>
      <span>登录/注册</span>
    </StyledMyAvatar>
  );
}

export default MyAvatar;