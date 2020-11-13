import React, { useState } from 'react';
import MyDynamic from "@/my/personal/ui/MyDynamic";
import MyArticle from "@/my/personal/ui/MyArticle";
import MyInfo from "@/my/personal/ui/MyInfo";
import {
  StyledMyPersonalDataBottom,
  StyledMyPersonalDataMain,
  StyledMyPersonalDataTop
} from "@/my/personal/styledMyDynamic";

import back from "@/assets/img/my/back.png";
import more from "@/assets/img/my/more.png";
import woman from "@/assets/img/my/woman.png";
import wechat from "@/assets/img/my/wechat.png";
import wechatFriends from "@/assets/img/my/wechatFriends.png";
import weibo from "@/assets/img/my/weibo.png";
import { ActionSheet } from "antd-mobile";
import { useHistory } from "react-router-dom";
import man from "@/assets/img/my/man.png";

function PersonDataUI(props) {
  const history = useHistory()
  const [activeTag, setActiveTag] = useState("ambulatory")
  const [state, setState] = useState({
    clicked: 'none'
  })
  const renderContent = (tagName) => {
    switch (tagName) {
      case "ambulatory":
        return <MyDynamic/>
      case "article":
        return <MyArticle/>
      case "info":
        return <MyInfo/>
      default:
        return null
    }
  }

  const dataList = [
    {url: wechat, title: '微信好友'},
    {url: wechatFriends, title: '朋友圈'},
    {url: weibo, title: '微博好友'},
  ].map(obj => ({
    icon: <img src={obj.url} alt={obj.title} style={{width: 36}}/>,
    title: obj.title,
  }));

  const showShareActionSheet = () => {
    ActionSheet.showShareActionSheetWithOptions({
        options: dataList,
      },
      (buttonIndex) => {
        console.log(state)
        setState({clicked: buttonIndex > -1 ? dataList[buttonIndex].title : 'cancel'});
      });
  }

  return (
    <div>
      <StyledMyPersonalDataTop
        className="personal-top"
        width="0 0 1px 0"
      >
        <img src={back} alt="back" onClick={() => history.goBack()}/>
        <h1>我的动态</h1>
        <img src={more} alt="more" onClick={showShareActionSheet}/>
      </StyledMyPersonalDataTop>
      <StyledMyPersonalDataMain>
        <div className="avatar-top-left">
          <img src={props.userInfo.data.userInfo.userinfoPhoto} alt=""/>
          {
            props.userInfo.data.userInfo.userinfoSex === "女" ? (
              <img src={man} alt="man"/>
            ) : (
              <img src={woman} alt="woman"/>
            )
          }
        </div>
        <div className="personal-nickname">
          <h2>特立独行的狗</h2>
          <span>与你分享我的观点，weibo：Alex Wang</span>
        </div>
        <div className="personal-list">
          <ul>
            <li>
              <h3>{props.userInfo.likeCount}</h3>
              <span>赞</span>
            </li>
            <li>
              <h3>{props.userInfo.favoriateCount}</h3>
              <span>收藏</span>
            </li>
            <li onClick={() => history.push("/followFans/concern")}>
              <h3>{props.userInfo.attentionCount}</h3>
              <span>关注</span>
            </li>
            <li onClick={() => history.push("/followFans/fans")}>
              <h3>{props.userInfo.fansCount}</h3>
              <span>粉丝</span>
            </li>
          </ul>
        </div>
      </StyledMyPersonalDataMain>
      <StyledMyPersonalDataBottom>
        <ul className="my-list">
          <li
            className={activeTag === "ambulatory" ? "active" : ""}
            onClick={() => {
              history.replace("/personal/ambulatory")
              setActiveTag("ambulatory")
            }}
          >
            <h3>动态</h3>
            <span/>
          </li>
          <li
            className={activeTag === "article" ? "active" : ""}
            onClick={() => {
              history.replace("/personal/article")
              setActiveTag("article")
            }}
          >
            <h3>文章</h3>
            <span/>
          </li>
          <li
            className={activeTag === "info" ? "active" : ""}
            onClick={() => {
              history.replace("/personal/info")
              setActiveTag("info")
            }}
          >
            <h3>资料</h3>
            <span/>
          </li>
        </ul>
        {renderContent(activeTag)}
      </StyledMyPersonalDataBottom>
    </div>
  );
}

export default PersonDataUI;