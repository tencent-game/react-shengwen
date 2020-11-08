import React, { useState } from 'react';
import MyListPublicTitle from "@/component/MyListPublicTitle";
import { ImagePicker, TextareaItem, InputItem, Button } from "antd-mobile"
import { StyledFeedback } from "./styledFeedback"

/**
 * @Description: 我的页面 反馈
 * @author JackLi
 * @date 2020/10/30
 * @time 19:05
 */
function Feedback(props) {
  const [active, setActive] = useState("")
  return (
    <StyledFeedback>
      <MyListPublicTitle title="反馈建议"/>
      <div className="feedback-type">
        <div>请选择反馈类型<span>*</span></div>
        <ul>
          <li
            className={active === "1" ? "active" : ""}
            onClick={() => setActive("1")}
          >
            <div/>
            <span>垃圾广告</span>
          </li>
          <li
            className={active === "2" ? "active" : ""}
            onClick={() => setActive("2")}
          >
            <div/>
            <span>有害信息</span>
          </li>
          <li
            className={active === "3" ? "active" : ""}
            onClick={() => setActive("3")}
          >
            <div/>
            <span>涉嫌侵权</span>
          </li>
        </ul>
      </div>
      <div className="split"/>
      <div className="feedback-problem">
        <h3>问题和意见</h3>
        <TextareaItem
          style={{fontSize: ".12rem", color: "rgb(153, 153, 153)"}}
          placeholder="请描述你要反馈的问题，我们会尽快回复哦~"
          data-seed="logId"
          autoHeight
          rows={3}
        />
        <ImagePicker
          style={{width: ".8rem", height: ".8rem"}}
          onImageClick={(index, fs) => console.log(index, fs)}
          length={1}
        />
      </div>
      <div className="split"/>
      <div className="email">
        <h3>联系方式</h3>
        <InputItem
          style={{fontSize: ".12rem", color: "rgb(153, 153, 153)"}}
          clear
          placeholder="请留下您的联系邮箱"
        />
      </div>
      <div className="split"/>
      <Button
        type="primary"
        style={{
          margin: ".16rem .12rem 0 .12rem",
          backgroundColor: "rgba(61, 126, 255, 1)",
          color: "rgb(255, 255, 255)",
          fontSize: ".14rem"
        }}
      >提交</Button>
    </StyledFeedback>
  );
}

export default Feedback;