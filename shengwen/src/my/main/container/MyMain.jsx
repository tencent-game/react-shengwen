import React, { useEffect, useState } from 'react';
import MyMainUi from "@/my/main/ui/MyMainUI";
import { get } from "@/utils/http";
import { useSelector } from "react-redux";
import UserData from "./context"

function MyMain(props) {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    (async () => {
      let result = await get({url: "http://localhost:9000/api/userInfo"})
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