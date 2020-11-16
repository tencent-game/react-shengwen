import React, { useEffect, useState } from 'react';
import MyListPublicTitle from "@/component/MyListPublicTitle";
import { StyledActivities } from "./styledActivities"
import activitiesImg from "@/assets/img/my/activitiesImg.png"
import eyes from "@/assets/img/my/eyes.png"
import application from "@/assets/img/my/application.png"
import { get } from "@/utils/http";

/**
 * @Description: 我的页面 我的活动
 * @author JackLi
 * @date 2020/10/30
 * @time 19:05
 */
function Activities(props) {
  const [activities, setActivities] = useState(null)
  useEffect(() => {
    (async () => {
      let result = await get("/api/activity/myself")
      console.log(result.data.data.rows)
      setActivities(result.data.data.rows)
    })()
  }, [])
  return (
    activities && <StyledActivities>
      <MyListPublicTitle title="我的活动"/>
      <div className="activities-title">
        共<span>{activities.length}</span>个已报名的活动
      </div>
      <div className="activities-item">
        <ul>
          {
            activities.map((item) => {
              return (
                <li key={item.activityId}>
                  <div className="activities-img">
                    <img src={item.activityCover} alt="activitiesImg"/>
                    <div className="top-left">
                      <img src={eyes} alt="eyes"/>
                      <span>{item.activityCount}</span>
                    </div>
                    <div className="top-right">
                      <img src={application} alt=""/>
                    </div>
                  </div>
                  <div className="activities-name">{item.activityTheme}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </StyledActivities>
  );
}

export default Activities;