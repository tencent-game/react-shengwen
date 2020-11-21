import React from 'react';
import { Button, Flex, Icon, InputItem, List, NavBar } from "antd-mobile";
import { DownIcon, QQ, WeChat, WeiBo } from "@/component/PublicIcon";
import { H1NavBar, IconsContainer } from "@/login/ui/styledLogin";

function LoginUi(props) {
  return (
    <div>
      <NavBar
        style={{color: "#000"}}
        mode="light"
        icon={<Icon type="cross" color="#000"/>}
        onLeftClick={props.onLeftClick}
        rightContent={(
          <span onClick={props.onChangeLogin}>
            {props.usePwd ? "密码登录" : "免密码登录"}
          </span>)}/>
      <H1NavBar>
        {
          props.usePwd ? "账号登录" : "密码登录"
        }
      </H1NavBar>
      {
        props.usePwd ? (
          <List style={{padding: "0 .32rem"}}>
            <InputItem
              style={{fontSize: "14px", height: ".5rem"}}
              type="phone"
              placeholder="请输入手机号"
              clear
              maxLength={13}
              defaultValue={props.phone}
              onInput={props.onHandlePhone}
            >
              <span style={{lineHeight: "44px", fontSize: "16px", paddingRight: "6px"}}>+86</span>
              <DownIcon/>
            </InputItem>
            <InputItem
              style={{fontSize: "14px", height: ".5rem"}}
              type="number"
              placeholder="请输入验证码"
              clear
              maxLength={6}
              defaultValue={props.code}
              onInput={props.onHandleCode}
            >
              <Button
                inline
                size="small"
                onClick={props.getCode}
                type="default"
                style={{
                  position: "absolute",
                  top: "0",
                  lineHeight: ".44rem",
                  right: "0",
                  height: "100%",
                  color: "#fff",
                  fontSize: ".14rem",
                  backgroundColor: "rgba(76, 89, 248, 0.317647058823529)",
                  border: "1px solid rgba(76, 89, 248, 0.317647058823529)"
                }}
              >获取验证码
              </Button>
            </InputItem>
            <Button
              onClick={props.onLogin}
              type="primary"
              style={{
                marginTop: ".1rem",
                backgroundColor: "rgba(76, 89, 248, 0.317647058823529)",
              }}
            >登录</Button>
            <p style={{
              width: "145px",
              height: "25px",
              fontSize: "12px",
              color: "#999",
              marginTop: "8px"
            }}>未注册手机验证后自动登录</p>
          </List>) : (
          <List style={{padding: "0 .32rem"}}>
            <div>
              <InputItem
                style={{fontSize: "14px", height: ".5rem"}}
                type="phone"
                placeholder="输入手机号或邮箱"
                onInput={props.emailInput}
                defaultValue={props.email}
              />
            </div>
            <div>
              <InputItem
                style={{fontSize: "14px", height: ".5rem"}}
                type="password"
                placeholder="输入密码"
                onInput={props.pwdInput}
                defaultValue={props.pwd}
              />
            </div>
            <Button
              onClick={props.toHome}
              type="default"
              style={{
                color: "#fff",
                marginTop: "12px",
                backgroundColor: "rgba(76, 89, 248, 0.317647058823529)",
                border: "1px solid rgba(76, 89, 248, 0.317647058823529)"
              }}
            >登录</Button>
          </List>)
      }

      <IconsContainer>
        <Flex style={{textAlign: "center"}}>
          <Flex.Item><WeChat/></Flex.Item>
          <Flex.Item><WeiBo/></Flex.Item>
          <Flex.Item><QQ/></Flex.Item>
        </Flex>
        {
          props.usePwd ? (
            <p style={{height: ".31rem"}}>
              <span style={{color: "#999"}}>注册即代表你同意</span>
              <span style={{color: "#3D7EFF"}}>《用户协议》</span>
              <span style={{color: "#999"}}>和</span>
              <span style={{color: "#3D7EFF"}}>《隐私保护指引》</span>
            </p>
          ) : (<p style={{height: ".31rem"}}/>)
        }
      </IconsContainer>
    </div>
  );
}

export default LoginUi;