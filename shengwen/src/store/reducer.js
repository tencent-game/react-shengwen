import {combineReducers} from "redux-immutable"
import {reducer as login} from "@/login/index"

const reducer = combineReducers({
  login
})

export default reducer