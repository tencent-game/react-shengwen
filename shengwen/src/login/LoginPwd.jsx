import React from 'react';
import {List, InputItem} from "antd-mobile"
import LoginButton from "../component/LoginButton";

function LoginPwd(props) {
  return (
    <List>
      <div>
        <InputItem
          style={{fontSize:"14px",height:".5rem"}}
          type="phone"
          placeholder="输入手机号或邮箱"/>
      </div>
      <div>
        <InputItem
          style={{fontSize:"14px",height:".5rem"}}
          type="password"
          placeholder="输入密码"/>
      </div>
      <LoginButton usePwd={props.usePwd}/>
    </List>
  );
}

export default LoginPwd;