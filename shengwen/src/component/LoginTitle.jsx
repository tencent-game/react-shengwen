import React from 'react';
import {H1NavBar} from "../login/styledLogin"

function LoginTitle(props) {
  return (
    <H1NavBar>
      {
        props.usePwd ? "账号登录" : "密码登录"
      }
    </H1NavBar>
  );
}

export default LoginTitle;