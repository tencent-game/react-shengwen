import React from 'react';
import {StyledPersonalDataInfo} from "./styledMyDynamic"

function MyInfo(props) {
  return (
    <StyledPersonalDataInfo>
      <ul className="info-list">
        <li>
          <div>现居地</div>
          <div>山东 青岛</div>
        </li>
        <li>
          <div>签名</div>
          <div>与你分享我的观点，weibo：Alex Wang</div>
        </li>
        <li style={{marginTop:".2rem"}}>
          <div style={{color:"#333333"}}>社交账号</div>
        </li>
        <li>
          <div>QQ</div>
          <div>192882684</div>
        </li>
        <li>
          <div>签名</div>
          <div>daisy0609</div>
        </li>
        <li>
          <div>微博</div>
          <div>daisy</div>
        </li>
        <li style={{marginTop:".2rem"}}>
          <div style={{color:"#333333"}}>关注领域</div>
        </li>
        <li style={{marginTop:".2rem"}}>
          <button>科技</button>
          <button>娱乐</button>
          <button>媒体</button>
        </li>
      </ul>
    </StyledPersonalDataInfo>
  );
}

export default MyInfo;