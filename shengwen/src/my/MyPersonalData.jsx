import React, {useState} from 'react';
import {
  StyledMyPersonalDataTop,
  StyledMyPersonalDataMain,
  StyledMyPersonalDataBottom
} from "./styledMy"
import {useHistory} from "react-router-dom"
import MyDynamic from "./MyDynamic"
import MyArticle from "./MyArticle"
import MyInfo from "./MyInfo"

// 图片
import back from "../assets/img/my/back.png"
import more from "../assets/img/my/more.png"
import defaultImg from "../assets/img/u4206.png";
import woman from "../assets/img/my/woman.png";

function MyPersonalData(props) {
  const history = useHistory()
  const [activeTag, setActiveTag] = useState("dynamic")

  const renderContent = (tagName) => {
    switch (tagName) {
      case "dynamic":
        return <MyDynamic/>
      case "article":
        return <MyArticle/>
      case "info":
        return <MyInfo/>
      default:
        return null
    }
  }

  return (
    <div>
      <StyledMyPersonalDataTop
        className="personal-top"
        width="0 0 1px 0"
      >
        <img src={back} alt="back" onClick={() => history.goBack()}/>
        <h1>我的动态</h1>
        <img src={more} alt="more"/>
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
              <h3>2302</h3>
              <span>赞</span>
            </li>
            <li>
              <h3>2302</h3>
              <span>赞</span>
            </li>
            <li>
              <h3>2302</h3>
              <span>赞</span>
            </li>
          </ul>
        </div>
      </StyledMyPersonalDataMain>
      <StyledMyPersonalDataBottom>
        <ul>
          <li
            className={activeTag === "dynamic" ? "active" : ""}
            onClick={() => {
              history.replace("/personal/dynamic")
              setActiveTag("dynamic")
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