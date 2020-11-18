import React, { useContext } from 'react';
import {StyledPersonalDataInfo} from "./styledMyDynamic"
import UserData from "@/my/main/container/context";

function MyInfo(props) {
  const userInfo = useContext(UserData);
  return (
    userInfo && <StyledPersonalDataInfo>
      <ul className="info-list">
        <li>
          <div>现居地</div>
          <div>山东 青岛</div>
        </li>
        <li>
          <div>签名</div>
          <div>与你分享我的观点，weibo：Alex Wang</div>
        </li>
        <li style={{marginTop: ".2rem"}}>
          <div style={{color: "#333333"}}>社交账号</div>
        </li>
        <li>
          <div>QQ</div>
          <div>{userInfo.userInfo.userinfoQq}</div>
        </li>
        <li>
          <div>签名</div>
          <div>{userInfo.userInfo.userinfoSignature}</div>
        </li>
        <li>
          <div>微博</div>
          <div>{userInfo.userInfo.userinfoWeibo}</div>
        </li>
        <li style={{marginTop: ".2rem"}}>
          <div style={{color: "#333333"}}>关注领域</div>
        </li>
        <li style={{marginTop: ".2rem"}}>
          <button>科技</button>
          <button>娱乐</button>
          <button>媒体</button>
        </li>
      </ul>
    </StyledPersonalDataInfo>
  );
}

export default MyInfo;