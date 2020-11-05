import React, { Component } from 'react';
import { connect } from "react-redux"
import { WingBlank } from 'antd-mobile'
import { StyledMyPage } from "./styledMy"
import MyAvatar from "./MyAvatar";
import MyAvatarLogin from "./MyAvatarLogin";
import MyList from "./MyList";
// 图片
import { withRouter } from "react-router-dom"

const mapStateToProps = (state) => {
  return {
    isLogin: state.getIn(["login", "isLogin"])
  }
}

@connect(mapStateToProps)
class My extends Component {

  render() {
    return (
      <StyledMyPage>
        <WingBlank>
          <h1 style={{fontSize: ".24rem", fontWeight: "700"}}>我的</h1>
          {
            this.props.isLogin ? <MyAvatarLogin/> : <MyAvatar/>
          }
        </WingBlank>
        <MyList/>
      </StyledMyPage>
    );
  }
}

export default withRouter(My);