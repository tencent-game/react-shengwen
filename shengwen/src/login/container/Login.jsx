import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import LoginUi from "@/login/ui/LoginUI";
import { useHistory } from "react-router-dom"
import { Toast } from "antd-mobile";
import { SuccessIcon, TipsIcon } from "@/component/PublicIcon";
import http from "@/utils/http";
import { actionCreator } from "../index"

function Login(props) {
  const [usePwd, setUsePwd] = useState(true)
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [code, setCode] = useState("")

  const history = useHistory()
  const dispatch = useDispatch()
  const ErrorTips = () => {
    return (
      <>
        <TipsIcon/><span style={{marginLeft: "10px"}}>{usePwd ? "手机号码格式不正确" : "账号或密码错误"}</span>
      </>
    )
  }

  const SuccessTips = () => {
    return (
      <>
        <SuccessIcon/><p style={{
        marginTop: "10px",
        width: "147px",
      }}>{usePwd ? "验证通过" : "登陆成功"}</p>
      </>
    )
  }

  const onChangeLogin = () => {
    setUsePwd(!usePwd)
  }

  const onBackClick = () => {
    history.goBack()
  }

  const onHandlePhone = (e) => {
    setPhone(e.target.value)
  }

  const onHandleCode = (e) => {
    setCode(e.target.value)
  }

  const getCode = async () => {
    if (phone.length < 13) {
      console.log("错误")
      Toast.info(<ErrorTips/>, 1, null, false);
    } else {

      let phoneData = phone.replace(/( )/g, "")
      console.log(phoneData)
      // let result = await http.post("", {
      //   email: phoneData
      // })
      let code1 = "1234"
      let userId = "1545"
      if (code === code1) {
        // 成功逻辑
        dispatch(actionCreator.setUserId(userId))
      }
      Toast.info(<SuccessTips/>, 1, null, false);
      setTimeout(() => {
        history.push("/home")
      }, 1000)
    }
  }

  const emailInput = (e) => {
    setEmail(e.target.value)
  }

  const pwdInput = (e) => {
    setPwd(e.target.value)
  }

  const toHome = () => {
    if (!email && !pwd) {
      Toast.info(<ErrorTips/>, 1, null, false);
    }
  }

  return (
    <LoginUi
      usePwd={usePwd}
      onChangeLogin={onChangeLogin}
      onLeftClick={onBackClick}
      onHandlePhone={onHandlePhone}
      phone={phone}
      getCode={getCode}
      emailInput={emailInput}
      email={email}
      pwdInput={pwdInput}
      pwd={pwd}
      toHome={toHome}
      code={code}
      onHandleCode={onHandleCode}
    />
  );
}

export default Login;