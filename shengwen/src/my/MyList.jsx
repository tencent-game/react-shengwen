import React from 'react';
import {withRouter} from "react-router-dom"
import {List} from "antd-mobile";
// 图片
import submitted from "../assets/img/my/post.png";
import activities from "../assets/img/my/activities.png";
import wallet from "../assets/img/my/wallet.png";
import setting from "../assets/img/my/setting.png";
import feedback from "../assets/img/my/feedback.png";

const Item = List.Item

function MyList(props) {
  return (
    <>
      <List className="my-list">
        <Item
          style={{height: ".64rem"}}
          thumb={submitted}
          arrow="horizontal"
          onClick={() => {
            let history = props.history
            history.push("/submitted")
            console.log(props)
          }}
        ><span>我要投稿</span></Item>
        <Item
          style={{height: ".64rem"}}
          thumb={activities}
          onClick={() => {
          }}
          arrow="horizontal"
        >
          <span>我的活动</span>
        </Item>
        <Item
          style={{height: ".64rem"}}
          thumb={wallet}
          onClick={() => {
          }}
          arrow="horizontal"
        >
          <span>我的钱包</span>
        </Item>
        <Item
          style={{height: ".64rem"}}
          thumb={setting}
          onClick={() => {
          }}
          arrow="horizontal"
        >
          <span>设置</span>
        </Item>
        <Item
          style={{height: ".64rem"}}
          thumb={feedback}
          onClick={() => {
          }}
          arrow="horizontal"
        >
          <span>反馈建议</span>
        </Item>
      </List>
    </>
  );
}

export default withRouter(MyList);
