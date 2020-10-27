import React from 'react';
import {StyledMyAvatarLogin} from "./styledMy"
import {Icon} from "antd-mobile"
import {withRouter} from "react-router-dom"
import defaultImg from "../assets/img/u4206.png";
import woman from "../assets/img/my/woman.png"

function MyAvatarLogin(props) {
  return (
    <StyledMyAvatarLogin>
      <div className="avatar-top">
        <div className="avatar-top-left">
          <img src={defaultImg} alt=""/>
          <img src={woman} alt="gender"/>
        </div>
        <div className="avatar-top-center">
          <h3>特立独行的狗</h3>
          <span><i onClick={() => {
            props.history.push("/my/concern")
          }}>关注 22</i>&nbsp;&nbsp;<i>粉丝 2302</i></span>
        </div>
        <div className="avatar-top-right">
          <span onClick={() => props.history.push("/myPersonalData")}>个人主页</span>
          <Icon type="right"/>
        </div>
      </div>
      <div className="avatar-bottom">
        <div className="avatar-bottom-item">
          <h4>232</h4>
          <span>动态</span>
        </div>
        <div className="avatar-bottom-item">
          <h4>269</h4>
          <span>文章</span>
        </div>
        <div className="avatar-bottom-item">
          <h4>143</h4>
          <span>收藏</span>
        </div>
        <div className="avatar-bottom-item">
          <h4>20</h4>
          <span>浏览</span>
        </div>
      </div>
    </StyledMyAvatarLogin>
  );
}

export default withRouter(MyAvatarLogin);