import React from 'react';
import { WingBlank } from "antd-mobile";
import MyAvatarLogin from "./MyAvatarLogin";
import MyAvatar from "./MyAvatar";
import MyList from "./MyList";
import { StyledMyPage } from "./styledMyMain";

function MyMainUi(props) {
  return (
    <StyledMyPage>
      <WingBlank>
        <h1 style={{fontSize: ".24rem", fontWeight: "700"}}>我的</h1>
        {
          props.isLogin ? <MyAvatarLogin/> : <MyAvatar/>
        }
      </WingBlank>
      <MyList/>
    </StyledMyPage>
  );
}

export default MyMainUi;