import React from 'react';
import {useSelector} from "react-redux"
import {List} from "antd-mobile";
import {useHistory} from "react-router-dom"
// 图片
import submitted from "../assets/img/my/post.png";
import activities from "../assets/img/my/activities.png";
import wallet from "../assets/img/my/wallet.png";
import setting from "../assets/img/my/setting.png";
import feedback from "../assets/img/my/feedback.png";

const Item = List.Item

function MyList(props) {
  const history = useHistory()
  const isLogin = useSelector(state => {
    return state.getIn(["login", "isLogin"])
  })


  const isToLogin = (path) => {
    return () => {
      if (isLogin) {
        history.push(path)
      } else {
        history.push("/login")
      }
    }
  }

  return (
    <>
      <List className="my-list">
        <Item
          style={{height: ".64rem"}}
          thumb={submitted}
          arrow="horizontal"
          onClick={isToLogin("/submitted")}
        ><span>我要投稿</span></Item>
        <Item
          style={{height: ".64rem"}}
          thumb={activities}
          onClick={isToLogin("/activities")}
          arrow="horizontal"
        >
          <span>我的活动</span>
        </Item>
        <Item
          style={{height: ".64rem"}}
          thumb={wallet}
          onClick={isToLogin("/wallet")}
          arrow="horizontal"
        >
          <span>我的钱包</span>
        </Item>
        <Item
          style={{height: ".64rem"}}
          thumb={setting}
          onClick={isToLogin("/settings")}
          arrow="horizontal"
        >
          <span>设置</span>
        </Item>
        <Item
          style={{height: ".64rem"}}
          thumb={feedback}
          onClick={isToLogin("/feedback")}
          arrow="horizontal"
        >
          <span>反馈建议</span>
        </Item>
      </List>
    </>
  );
}

export default MyList;
