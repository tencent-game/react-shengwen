import React from 'react';
import MyListPublicTitle from "@/component/MyListPublicTitle";
import {StyledActivities} from "./styledActivities"
import activitiesImg from "@/assets/img/my/activitiesImg.png"
import eyes from "@/assets/img/my/eyes.png"
import application from "@/assets/img/my/application.png"

/**
 * @Description: 我的页面 我的活动
 * @author JackLi
 * @date 2020/10/30
 * @time 19:05
 */
function Activities(props) {
  return (
    <StyledActivities>
      <MyListPublicTitle title="我的活动"/>
      <div className="activities-title">
        共<span>4</span>个已报名的活动
      </div>
      <div className="activities-item">
        <ul>
          <li>
            <div className="activities-img">
              <img src={activitiesImg} alt="activitiesImg"/>
              <div className="top-left">
                <img src={eyes} alt="eyes"/>
                <span>23636</span>
              </div>
              <div className="top-right">
                <img src={application} alt=""/>
              </div>
            </div>
            <div className="activities-name">全栈工程师线下培训课程</div>
          </li>
          <li>
            <div className="activities-img">
              <img src={activitiesImg} alt="activitiesImg"/>
              <div className="top-left">
                <img src={eyes} alt="eyes"/>
                <span>23636</span>
              </div>
              <div className="top-right">
                <img src={application} alt=""/>
              </div>
            </div>
            <div className="activities-name">全栈工程师线下培训课程</div>
          </li>
          <li>
            <div className="activities-img">
              <img src={activitiesImg} alt="activitiesImg"/>
              <div className="top-left">
                <img src={eyes} alt="eyes"/>
                <span>23636</span>
              </div>
              <div className="top-right">
                <img src={application} alt=""/>
              </div>
            </div>
            <div className="activities-name">全栈工程师线下培训课程</div>
          </li>
          <li>
            <div className="activities-img">
              <img src={activitiesImg} alt="activitiesImg"/>
              <div className="top-left">
                <img src={eyes} alt="eyes"/>
                <span>23636</span>
              </div>
              <div className="top-right">
                <img src={application} alt=""/>
              </div>
            </div>
            <div className="activities-name">全栈工程师线下培训课程</div>
          </li>
        </ul>
      </div>
    </StyledActivities>
  );
}

export default Activities;