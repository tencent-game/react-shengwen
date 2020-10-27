import React from 'react';
import {NavBar, Icon} from "antd-mobile"
import {useHistory} from "react-router-dom"

function LoginNavBar(props) {
  let history = useHistory()
  return (
    <NavBar
      style={{color:"#000"}}
      mode="light"
      icon={<Icon type="cross" color="#000"/>}
      onLeftClick={() => history.goBack()}
      rightContent={<span onClick={props.onChangeLogin}>{props.usePwd ? "密码登录" : "免密码登录"}</span>}/>
  );
}

export default LoginNavBar;