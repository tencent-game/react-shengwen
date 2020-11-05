import { fromJS, Map } from "immutable"

const defaultState = fromJS({
  userInfo: null
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET_USERINFO":
      return state.set("userInfo", Map(action.userInfo))
    default:
      return state
  }
}

export default reducer