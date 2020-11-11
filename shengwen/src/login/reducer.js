import Immutable from "immutable"

const defaultState = Immutable.Map({
  isLogin: true,
  userId: null
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN":
      return state.setIn(["isLogin"], action.loginState)
    case "SET_USERID":
      return state.setIn(["userId"], action.userId)
    default:
      return state
  }
}

export default reducer