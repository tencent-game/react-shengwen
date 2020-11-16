import React, { useState, useEffect } from 'react';
import FollowAndFansUI from "@/my/followandfans/ui/FollowAndFansUI";
import { post } from "@/utils/http";

function FollowAndFans(props) {
  const [followList, setFollowList] = useState(null)
  const [fansList, setFansList] = useState(null)

  useEffect(() => {
    (async () => {
      let follow = await post("/api/homePage/attention", JSON.stringify({
        type: 0
      }))
      let fans = await post("/api/homePage/attention", JSON.stringify({
        type: 1
      }))
      setFollowList(follow.data.rows)
      setFansList(fans.data.rows)
      // console.log(follow.data)
    })()
  }, [])

  return (
    followList && fansList && <FollowAndFansUI followList={followList} fansList={fansList}/>
  );
}

export default FollowAndFans;