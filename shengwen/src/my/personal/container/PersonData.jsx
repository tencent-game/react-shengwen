import React, { useEffect, useState } from 'react';
import PersonDataUI from "@/my/personal/ui/PersonDataUI";
import http from "@/utils/http";

function PersonData(props) {
  const [userInfo, setUserInfo] = useState(null)
  const [dynamicData, setDynamicData] = useState(null)
  useEffect(() => {
    (async () => {
      let result = await http.get("http://localhost:9000/api/userInfo")
      setUserInfo(result)
    })()
  }, [])
  useEffect(() => {
    (async () => {
      let result = await http.get("", {userId: "", limit: "", offset: ""})
      setDynamicData(result)
    })()
  })
  return (
    dynamicData && userInfo && (<PersonDataUI userInfo={userInfo}/>)
  );
}

export default PersonData;