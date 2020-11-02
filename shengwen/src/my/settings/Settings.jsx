import React from 'react';
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux"
import MyListPublicTitle from "../../component/MyListPublicTitle";
import {actionCreator} from "@/login/index"
import {List} from "antd-mobile"


const Item = List.Item

function Settings(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  return (
    <div style={{height: "6.67rem", display: "flex", flexDirection: "column"}}>
      <MyListPublicTitle title="设置"/>
      <div style={{backgroundColor: "rgba(242, 242, 242, 1)", flex: "1"}}>
        <List style={{paddingTop: ".08rem"}}>
          <Item
            arrow="horizontal"
            style={{height: ".5rem"}}
            onClick={() => {
            }}>
            <span style={{fontSize: ".14rem"}}>账号资料</span>
          </Item>
          <Item
            arrow="horizontal"
            style={{height: ".5rem"}}
            onClick={() => {
            }}>
            <span style={{fontSize: ".14rem"}}>账号绑定与安全</span>
          </Item>
        </List>
        <List style={{paddingTop: ".08rem"}}>
          <Item
            arrow="horizontal"
            style={{height: ".5rem"}}
            onClick={() => {
            }}>
            <span style={{fontSize: ".14rem"}}>推送设置</span>
          </Item>
          <Item
            arrow="horizontal"
            style={{height: ".5rem"}}
            onClick={() => {
            }}>
            <span style={{fontSize: ".14rem"}}>赞赏设置</span>
          </Item>
          <Item
            style={{fontSize: ".14rem", height: ".5rem"}}
            extra={"207M"}>
            <span style={{fontSize: ".14rem"}}>清除缓存</span>
          </Item>
        </List>
        <List style={{paddingTop: ".08rem"}}>
          <Item
            arrow="horizontal"
            style={{height: ".5rem"}}
            onClick={() => {
            }}>
            <span style={{fontSize: ".14rem"}}>检查新版本</span>
          </Item>
          <Item
            arrow="horizontal"
            style={{height: ".5rem"}}
            onClick={() => {
            }}>
            <span style={{fontSize: ".14rem"}}>关于我们</span>
          </Item>
        </List>
        <List style={{paddingTop: ".08rem"}}>
          <Item
            arrow="horizontal"
            style={{height: ".5rem"}}
            onClick={() => {
              dispatch(actionCreator.changeLogin(false))
              history.push("/my")
            }}>
            <span style={{fontSize: ".14rem"}}>退出账号</span>
          </Item>
        </List>
      </div>
    </div>
  );
}

export default Settings;