import React,{useState} from 'react';
import {FollowBtnCss } from './DynamicCommon'
import addFollow from "../../assets/img/my/addFollow.png"
import {useLocation} from 'react-router-dom'
const FollowBtn = () => {
  // const [activeTag, setActiveTag] = useState("follow")
  const [follow, setFollow] = useState(true)
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <FollowBtnCss style={ pathname==='/dynamic/hot' ? { display:'block'} : {display:'none'}}>
    <div
      className={follow ? "active" : ""}
      onClick={() => setFollow(!follow)}
    >{follow ? (<span><img src={addFollow} alt="add"/>关注</span>) : "已关注"}</div>
    </FollowBtnCss>
  );
};

export default FollowBtn;