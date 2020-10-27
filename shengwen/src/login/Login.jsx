import React, {Component} from 'react';
import {Flex} from "antd-mobile"
import LoginNavBar from "../component/LoginNavBar";
import LoginTitle from "../component/LoginTitle";
import LoginPhone from "./LoginPhone";
import {WeChat, WeiBo, QQ} from "../component/PublicIcon"
import LoginPwd from "./LoginPwd";
import {
  IconsContainer,
} from "./styledLogin"

class Login extends Component {
  state = {
    usePwd: true
  }
  changeLogin = () => {
    this.setState({
      usePwd: !this.state.usePwd
    })
  }

  render() {
    return (
      <>
        <LoginNavBar onChangeLogin={this.changeLogin} usePwd={this.state.usePwd}/>
        <div style={{padding: "0 .3rem"}}>
          <LoginTitle usePwd={this.state.usePwd}/>
          {
            this.state.usePwd ? <LoginPhone usePwd={this.state.usePwd}/> : <LoginPwd usePwd={this.state.usePwd}/>
          }
        </div>
        {/* 图标 */}
        <IconsContainer>
          <Flex style={{textAlign: "center"}}>
            <Flex.Item><WeChat/></Flex.Item>
            <Flex.Item><WeiBo/></Flex.Item>
            <Flex.Item><QQ/></Flex.Item>
          </Flex>
          {
            this.state.usePwd && (
              <p>
                <span style={{color: "#999"}}>注册即代表你同意</span>
                <span style={{color: "#3D7EFF"}}>《用户协议》</span>
                <span style={{color: "#999"}}>和</span>
                <span style={{color: "#3D7EFF"}}>《隐私保护指引》</span>
              </p>
            )
          }
        </IconsContainer>
      </>
    );
  }
}

export default Login;