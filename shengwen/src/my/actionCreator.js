const loadDataSync = (userInfo) => {
  return {
    type: "GET_USERINFO",
    userInfo
  }
}

const loadDataSyncSaga = () => {
  return {
    type: "loadDataSaga"
  }
}

export default {
  loadDataSync,
  loadDataSyncSaga
}