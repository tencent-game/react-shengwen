import React, {useState} from 'react';
import {
  StyledMyPersonalDataTop,
  StyledMyPersonalDataMain,
  StyledMyPersonalDataBottom
} from "./styledMyDynamic"
import {useHistory} from "react-router-dom"
import MyDynamic from "./MyDynamic"
import MyArticle from "./MyArticle"
import MyInfo from "./MyInfo"
import {ActionSheet} from "antd-mobile"

// 图片
import back from "../../assets/img/my/back.png"
import more from "../../assets/img/my/more.png"
import defaultImg from "../../assets/img/u4206.png";
import woman from "../../assets/img/my/woman.png";
import wechat from "../../assets/img/my/wechat.png"
import wechatFriends from "../../assets/img/my/wechatFriends.png"
import weibo from "../../assets/img/my/weibo.png"

function MyPersonalData(props) {
  const history = useHistory()
  const [activeTag, setActiveTag] = useState("info")
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
        setState({clicked: buttonIndex > -1 ? dataList[buttonIndex].title : 'cancel'});
        console.log(state)
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
          <img src={defaultImg} alt=""/>
          <img src={woman} alt="gender"/>
        </div>
        <div className="personal-nickname">
          <h2>特立独行的狗</h2>
          <span>与你分享我的观点，weibo：Alex Wang</span>
        </div>
        <div className="personal-list">
          <ul>
            <li>
              <h3>2302</h3>
              <span>赞</span>
            </li>
            <li>
              <h3>2069</h3>
              <span>收藏</span>
            </li>
            <li onClick={() => history.push("/followFans/concern")}>
              <h3>22</h3>
              <span>关注</span>
            </li>
            <li onClick={() => history.push("/followFans/fans")}>
              <h3>2302</h3>
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

export default MyPersonalData;