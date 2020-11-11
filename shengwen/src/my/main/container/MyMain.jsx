import React, { useEffect, useState } from 'react';
import MyMainUi from "@/my/main/ui/MyMainUI";
import http from "@/utils/http";
import { useSelector } from "react-redux";
import UserData from "./context"

function MyMain(props) {
  const [userInfo, setUserInfo] = useState(null)
  useEffect(() => {
    (async () => {
      let result = await http.get("http://localhost:9000/api/userInfo")
      setUserInfo(result)
    })()
  }, [])

  const isLogin = useSelector(state => {
    return state.getIn(["login", "isLogin"])
  })

  const userId = useSelector(state => {
    console.log(state)
    return state.getIn(["login", "userId"])
  })

  console.log(userId)


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