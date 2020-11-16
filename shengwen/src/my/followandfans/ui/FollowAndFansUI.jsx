import React, { useState } from 'react';
import back from "../../../assets/img/my/back.png"
import { useHistory } from "react-router-dom"
import { StyledMyPublicTop, StyledMyPublicMain, StyledMyPublicMainItem } from "./styledFollowAndFans"
import followImg from "../../../assets/img/my/follow.png"
import addFollow from "../../../assets/img/my/addFollow.png"

/**
 * @Description: 我的页面 我的粉丝与关注
 * @author JackLi
 * @date 2020/10/30
 * @time 16:45
 */
function FollowAndFansUI(props) {
  const [follow, setFollow] = useState(false)
  const history = useHistory()
  const pathname = history.location.pathname
  return (
    <>
      <StyledMyPublicTop>
        <div className="back">
          <img
            src={back}
            alt="back"
            onClick={() => history.goBack()}
          /></div>
        <ul>
          <li
            className={pathname === "/followFans/concern" ? "active" : ""}
            onClick={() => history.replace("/followFans/concern")}
          >
            <h3>我的关注</h3>
            <span/>
          </li>
          <li
            className={pathname === "/followFans/fans" ? "active" : ""}
            onClick={() => history.replace("/followFans/fans")}
          >
            <h3>我的粉丝</h3>
            <span/>
          </li>
        </ul>
      </StyledMyPublicTop>

      {
        history.location.pathname === "/followFans/concern" ? (
          <StyledMyPublicMain>
            <div className="my-title">共<i>5</i>个关注</div>
            <ul>
              {
                props.followList.map((item) => {
                  console.log(item)
                  return (
                    <StyledMyPublicMainItem
                      width="0 0 1px 0"
                    >
                      <img src={item.userinfoPhoto} alt="avatar"/>
                      <div>
                        <h4>{item.userName}</h4>
                        <span>{item.userinfoSignature}</span>
                      </div>
                      <button
                        className={follow ? "active" : ""}
                        onClick={() => setFollow(!follow)}
                      >{follow ? (<span><img src={addFollow} alt="add"/>关注</span>) : "已关注"}</button>
                    </StyledMyPublicMainItem>
                  )
                })
              }

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
        ) : (
          <StyledMyPublicMain>
            <div className="my-title">共<i>5</i>个粉丝</div>
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
                  className={!follow ? "active" : ""}
                  onClick={() => setFollow(!follow)}
                >{follow ? (<span><img src={addFollow} alt="add"/>关注</span>) : "已关注"}</button>
              </StyledMyPublicMainItem>
            </ul>
            <div className="my-bottom">没有了~</div>
          </StyledMyPublicMain>
        )
      }
    </>
  );
}

export default FollowAndFansUI;