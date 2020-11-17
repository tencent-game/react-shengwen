import {combineReducers} from "redux-immutable"
import {reducer as login} from "@/login/index"
import {reducer as my} from "@/my/index"
import {reducer as home}from '@/home/homepage/index'
import {reducer as searchList}from '@/home/searchpage/index'
import { reducer as dynamic} from '@/dynamic'
const reducer = combineReducers({
  login,
  my,
  home,
  searchList,
  dynamic
})

export default reducer