import React, { useContext } from 'react';
import { StyledMyAvatarLogin } from "./styledMyMain"
import { Icon } from "antd-mobile"
import { useHistory } from "react-router-dom"
import defaultImg from "@/assets/img/u4206.png";
import woman from "@/assets/img/my/woman.png"
import UserData from "../container/context"

function MyAvatarLogin(props) {
  const history = useHistory()
  const userInfo = useContext(UserData);
  return (
    <StyledMyAvatarLogin>
      <div className="avatar-top">
        <div className="avatar-top-left">
          <img src={defaultImg} alt=""/>
          <img src={woman} alt="gender"/>
        </div>
        <div className="avatar-top-center">
          <h3>{userInfo.data.userInfo.userName}</h3>
          <span>
            <i
              onClick={() => history.push("/followFans/concern")}
            >
              关注 22
            </i>&nbsp;&nbsp;&nbsp;&nbsp;
            <i
              onClick={() => history.push("/followFans/fans")}
            >
              粉丝 2302
            </i></span>
        </div>
        <div className="avatar-top-right">
          <span onClick={() => history.push("/personal/ambulatory")}>个人主页</span>
          <Icon type="right"/>
        </div>
      </div>
      <div className="avatar-bottom">
        <div
          className="avatar-bottom-item"
          onClick={() => history.push("/ambulatoryArticle/ambulatory")}
        >
          <h4>232</h4>
          <span>动态</span>
        </div>
        <div
          className="avatar-bottom-item"
          onClick={() => history.push("/ambulatoryArticle/article")}
        >
          <h4>269</h4>
          <span>文章</span>
        </div>
        <div className="avatar-bottom-item">
          <h4>143</h4>
          <span>收藏</span>
        </div>
        <div
          className="avatar-bottom-item"
          onClick={() => history.push("/historyLog")}
        >
          <h4>20</h4>
          <span>浏览</span>
        </div>
      </div>
    </StyledMyAvatarLogin>
  );
}

export default MyAvatarLogin;