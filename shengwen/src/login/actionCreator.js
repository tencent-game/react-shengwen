const changeLogin = (loginState) => {
  return {
    type: "CHANGE_LOGIN",
    loginState
  }
}

const setUserId = (userId) => {
  console.log(userId)
  return {
    type: "SET_USERID",
    userId
  }
}

export default {
  changeLogin,
  setUserId
}