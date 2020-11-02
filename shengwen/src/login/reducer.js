import Immutable from "immutable"

const defaultState = Immutable.Map({
    isLogin: true
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "CHANGE_LOGIN":
      return state.setIn(["isLogin"], action.loginState)
    default:
      return state
  }
}

export default reducer