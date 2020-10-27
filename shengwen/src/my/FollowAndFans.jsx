import React, {useState} from 'react';
import back from "../assets/img/my/back.png"
import {withRouter} from "react-router-dom"
import {StyledMyPublicTop, StyledMyPublicMain, StyledMyPublicMainItem} from "./styledMy"
import followImg from "../assets/img/my/follow.png"
import addFollow from "../assets/img/my/addFollow.png"

function FollowAndFans(props) {
  const [activeTag, setActiveTag] = useState("follow")
  const [follow, setFollow] = useState(false)
  return (
    <>
      <StyledMyPublicTop>
        <div className="back">
          <img
            src={back}
            alt=""
            onClick={() => props.history.goBack("/my")}
          /></div>
        <ul>
          <li
            className={activeTag === "follow" ? "active" : ""}
            onClick={() => {
              setActiveTag("follow")
              props.history.replace("/followFans/follow")
            }}
          >
            <h3>我的关注</h3>
            <span/>
          </li>
          <li
            className={activeTag === "fans" ? "active" : ""}
            onClick={() => {
              setActiveTag("fans")
              props.history.replace("/followFans/fans")
            }}
          >
            <h3>我的粉丝</h3>
            <span/>
          </li>
        </ul>
      </StyledMyPublicTop>
      <StyledMyPublicMain>
        <div className="my-title">共<i>5</i>个关注</div>

        <ul>
          <StyledMyPublicMainItem
            width="0 0 1px 0"
          >
            <img src={followImg} alt="avatar"/>
            <div>
              <h4>环球影视</h4>
              <span>群求最新影视资讯</span>
            </div>
            <button
              className={follow ? "active" : ""}
              onClick={() => setFollow(!follow)}
            >{follow ? (<span><img src={addFollow} alt="add"/>关注</span>) : "已关注"}</button>
          </StyledMyPublicMainItem>
        </ul>

        <div className="my-bottom">没有了~</div>
      </StyledMyPublicMain>
    </>
  );
}

export default withRouter(FollowAndFans);