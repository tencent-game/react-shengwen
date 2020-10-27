import React, {Component} from 'react';
import {Route} from "react-router-dom"
import {WingBlank} from 'antd-mobile'
import {StyledMyPage} from "./styledMy"
import MyAvatar from "./MyAvatar";
import MyAvatarLogin from "./MyAvatarLogin";
import MyList from "./MyList";
// 图片
import {withRouter} from "react-router-dom"

class My extends Component {
  state = {
    isLogin: true
  }

  toLogin = () => {
    console.log(this)
    this.props.history.push("/login")
  }

  render() {
    return (
      <StyledMyPage>
        <WingBlank>
          <h1 style={{fontSize: ".24rem", fontWeight: "700"}}>我的</h1>
          {
            this.state.isLogin ? <MyAvatarLogin/> : <MyAvatar/>
          }
        </WingBlank>
        <MyList/>
        <Route path="/my/123"><div>123</div></Route>
      </StyledMyPage>
    );
  }
}

export default withRouter(My);