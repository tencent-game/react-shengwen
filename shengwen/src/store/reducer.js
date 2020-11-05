import {combineReducers} from "redux-immutable"
import {reducer as login} from "@/login/index"
import {reducer as my} from "@/my/index"

const reducer = combineReducers({
  login,
  my
})

export default reducer