import {DYNAMIC_TIP,COMMENT_TIP,SEARCH_DYNAMIC} from './actionTypes'
import {fromJS,} from 'immutable'

const defaultState = fromJS({
  dynamictip:false,
  commenttip:false,
  list:''
})   

const reducer = (state=defaultState,action)=>{
  // console.log(action)
  switch(action.type){
    case DYNAMIC_TIP :
      return state.set('dynamictip',action.checked)
    case COMMENT_TIP :
      return state.set('commenttip',action.checked)
    case SEARCH_DYNAMIC:
      return state.set('dynamicinfo',action.list)
    default :
    return state
  }
}

export default reducer