import React, { useState, useEffect } from 'react';
import FollowAndFansUI from "@/my/followandfans/ui/FollowAndFansUI";
import { post } from "@/utils/http";

function FollowAndFans(props) {
  const [followList, setFollowList] = useState(null)
  const [fansList, setFansList] = useState(null)

  useEffect(() => {
    (async () => {
      let follow = await post({
        url: "/api/homePage/attention", data: JSON.stringify({
          type: 0
        })
      })
      let fans = await post({
        url: "/api/homePage/attention", data: JSON.stringify({
          type: 1
        })
      })
      console.log(follow)
      if (follow.message === "查询失败") {
        setFollowList([])
      } else {
        setFollowList(follow.data.rows)
      }
      if (fans.message === "查询失败") {
        setFansList([])
      } else {
        setFansList(fans.data.rows)
      }
    })()
  }, [])

  return (
    followList && fansList && (<FollowAndFansUI followList={followList} fansList={fansList}/>)
  );
}

export default FollowAndFans;