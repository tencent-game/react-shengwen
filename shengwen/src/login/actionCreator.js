const changeLogin = (loginState) => {
  return {
    type: "CHANGE_LOGIN",
    loginState
  }
}

export default {
  changeLogin
}