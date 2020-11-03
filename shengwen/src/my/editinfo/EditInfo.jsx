import React from 'react';
import MyListPublicTitle from "@/component/MyListPublicTitle";
import {StyledEditInfoList, StyledEditInfoItem} from "./StyledEditInfo"
import {ActionSheet} from "antd-mobile"
import miniAvatar from "@/assets/img/my/miniAvatar.png"
import right from "@/assets/img/my/right.png"


function EditInfo(props) {
  const showAvatarSheet = () => {
    const BUTTONS = ['拍照', '相册', '取消'];
    ActionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        maskClosable: true,
      },
      (buttonIndex) => {
        console.log(buttonIndex)
      });
  }

  const showGenderSheet = () => {
    const BUTTONS = ['男', '女', '取消'];
    ActionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        maskClosable: true,
      },
      (buttonIndex) => {
        console.log(buttonIndex)
      });
  }

  return (
    <div>
      <MyListPublicTitle title="编辑资料"/>
      <StyledEditInfoList>
        <div className="split-line"/>
        <ul>
          <li onClick={showAvatarSheet}>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">头像</div>
              <div className="center"><img src={miniAvatar} alt=""/></div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

          <li>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">用户名</div>
              <div className="center">特立独行的狗</div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

          <li>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">签名</div>
              <div className="center">与你分享我的观点，weibo：Alex Wang</div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

        </ul>
        <div className="split-line"/>
        <ul>
          <li onClick={showGenderSheet}>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">性别</div>
              <div className="center">女</div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

          <li>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">地区</div>
              <div className="center">山东 青岛</div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

        </ul>
        <div className="split-line"/>
        <ul>
          <li>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">QQ</div>
              <div className="center">1195226</div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

          <li>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">微信</div>
              <div className="center">Alex Wang</div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

          <li>
            <StyledEditInfoItem width="0 0 1px 0">
              <div className="left">微博</div>
              <div className="center">特立独行的狗</div>
              <div className="right"><img src={right} alt=""/></div>
            </StyledEditInfoItem>
          </li>

        </ul>
        <div className="split-line"/>
        <div className="field">
          <h3>关注领域</h3>
          <ul>
            <li>科技</li>
            <li>娱乐</li>
            <li>+添加</li>
          </ul>
        </div>
      </StyledEditInfoList>
    </div>
  );
}

export default EditInfo;