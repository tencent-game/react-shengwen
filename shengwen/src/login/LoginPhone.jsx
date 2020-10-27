import React, {useState} from 'react';
import {List, InputItem} from "antd-mobile"
import {DownIcon} from "../component/PublicIcon"
import LoginButton from "../component/LoginButton";


function LoginPhone(props) {
  const [phone, setPhone] = useState(false)
  const handleInput = (e) => {
    let phone = e.target.value
    console.log(phone.length)
    phone.length === 14 ? setPhone(true) : setPhone(false)
  }

  return (
    <List>
      <InputItem
        style={{fontSize: "14px",height:".5rem"}}
        type="phone"
        placeholder="请输入手机号"
        clear
        onInput={handleInput}
      >
        <span style={{lineHeight: "44px", fontSize: "16px", paddingRight: "6px"}}>+86</span>
        <DownIcon/>
      </InputItem>
      <LoginButton phone={phone} usePwd={props.usePwd}/>
      <p style={{
        width: "145px",
        height: "25px",
        fontSize: "12px",
        color: "#999",
        marginTop: "8px"
      }}>未注册手机验证后自动登录</p>
    </List>
  );
}

export default LoginPhone;