import React from 'react';
import {NavBar, Icon} from "antd-mobile"


function LoginNavBar(props) {
  return (
    <NavBar
      style={{color:"#000"}}
      mode="light"
      icon={<Icon type="cross" color="#000"/>}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={<span onClick={props.onChangeLogin}>{props.usePwd ? "密码登录" : "免密码登录"}</span>}/>
  );
}

export default LoginNavBar;