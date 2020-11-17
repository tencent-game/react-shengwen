import React, { useEffect, useState } from 'react';
import MyMainUi from "@/my/main/ui/MyMainUI";
import { post } from "@/utils/http";
import { useSelector } from "react-redux";
import UserData from "./context"

function MyMain(props) {
  const [userInfo, setUserInfo] = useState(null)
  const userId = useSelector((state) => {
    return state.getIn(["login", "userId"])
  })
  useEffect(() => {
    (async () => {
      let data = {
        userId: userId || 2
      }
      let result = await post({url: "/api/homePage/information", data: JSON.stringify(data)})
      setUserInfo(result.data)
    })()
  }, [])

  const isLogin = useSelector(state => {
    return state.getIn(["login", "isLogin"])
  })

  const Provider = UserData.Provider
  return (
    userInfo && (
      <Provider value={userInfo}>
        <MyMainUi
          isLogin={isLogin}
        />
      </Provider>
    )
  );
}

export default MyMain;