import React from 'react';
import {Button, Toast} from "antd-mobile"
import {TipsIcon, SuccessIcon} from "../component/PublicIcon"

const ErrorTips = () => {
  return (
    <>
      <TipsIcon/><span style={{marginLeft: "10px"}}>手机号码格式不正确</span>
    </>
  )
}

const SuccessTips = () => {
  return (
    <>
      <SuccessIcon/><p style={{
      marginTop: "10px",
      width: "147px",
    }}>验证通过</p>
    </>
  )
}

function LoginButton(props) {
  const handleClick = () => {
    let phone = props.phone
    console.log(phone)
    if (!phone) {
      Toast.info(<ErrorTips/>, 2, null, false);
    } else {
      Toast.info(<SuccessTips/>, 2, null, false);
    }
  }
  return (
    <Button
      onClick={handleClick}
      type="default"
      style={{
        color:"#fff",
        marginTop: "12px",
        backgroundColor: "rgba(76, 89, 248, 0.317647058823529)",
        border: "1px solid rgba(76, 89, 248, 0.317647058823529)"
      }}
    >{props.usePwd ? "获取验证码" : "登录"}</Button>
  );
}

export default LoginButton;