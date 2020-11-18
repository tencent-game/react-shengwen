import {DYNAMIC_TIP,COMMENT_TIP,SEARCH_DYNAMIC} from './actionTypes'
import {get } from '@u/http'

const changeDynamicTip = (checked) => {
  return {
    type:DYNAMIC_TIP,
    checked

  }
}
  const changeCommentTip = (checked) => {
    return {
      type:COMMENT_TIP,
      checked
  
    }
}

const searchDynamic = list =>{
  // console.log(list)
  return {
    type:SEARCH_DYNAMIC,
    list
  }
}

const searchDynamicAsync =dType => {
  return async(dispatch)=>{
    // console.log(0)
    let res = await get(
     '/api/dynamic/content',
      {
        limit:'50',
        offset:'0',
        type:dType
      }
    )
    dispatch(searchDynamic(res.data.data.rows))
  }
}

export default {
  changeCommentTip,
  changeDynamicTip,
  searchDynamic,
  searchDynamicAsync
}