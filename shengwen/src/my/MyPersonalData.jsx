import React from 'react';
import {
  StyledMyPersonalDataTop,
  StyledMyPersonalDataMain
} from "./styledMy"

import back from "../assets/img/my/back.png"
import more from "../assets/img/my/more.png"
import defaultImg from "../assets/img/u4206.png";
import woman from "../assets/img/my/woman.png";
function MyPersonalData(props) {
  return (
    <div>
      <StyledMyPersonalDataTop
        className="personal-top"
        width="0 0 1px 0"
      >
        <img src={back} alt="back"/>
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
      <div>

      </div>
    </div>
  );
}

export default MyPersonalData;