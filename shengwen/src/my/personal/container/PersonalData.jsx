import React, { useEffect, useState } from 'react';
import MyPersonalData from "@/my/personal/ui/MyPersonalData";
import UserData from "@/my/main/container/context"
import { post } from "@/utils/http";

function PersonalData(props) {
  const Provider = UserData.Provider
  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    (async () => {
      let data = {
        userId: 2
      }
      let result = await post("/api/homePage/information", JSON.stringify(data))
      setUserInfo(result.data)
    })()
  }, [])

  return (
    <Provider value={userInfo}>
      <MyPersonalData/>
    </Provider>
  );
}

export default PersonalData;