import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import LoginUi from "@/login/ui/LoginUI";
import { useHistory } from "react-router-dom"
import { Toast } from "antd-mobile";
import { SuccessIcon, TipsIcon } from "@/component/PublicIcon";
import { post } from "@/utils/http";
import { actionCreator } from "../index"

function Login(props) {
  const [usePwd, setUsePwd] = useState(true)
  const [phone, setPhone] = useState(null)
  const [email, setEmail] = useState("")
  const [pwd, setPwd] = useState("")
  const [code, setCode] = useState("")
  const [isSucess, setIsSuccess] = useState(0)

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
      let result = post("/api/mail/send", JSON.stringify({
        mobile: phoneData
      }))
      console.log(result)
      // console.log(result.data.verifyCode)
      if (code === result.data.data.verifyCode) {
        // 成功逻辑
        setIsSuccess(1)
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

  const onLogin = () => {
    if (isSucess) {
      // 正确
      let result = post("/api/mail/success", JSON.stringify({
        mobile: phone
      }))
      console.log(result.data.userId)
      dispatch(actionCreator.setUserId(result.data.userId))
    } else {
      // 错误
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
      onLogin={onLogin}
    />
  );
}

export default Login;