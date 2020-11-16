import {LOADDATA} from './actionTypes'

import {get} from '@/utils/http.js'


const loadDateSync=list=>{
    return {
      type:LOADDATA,
      list
    }
}

const  loadDateAsync=()=>{
  return async(dispatch)=>{
      let result= await get ({
        url:'/api/search/history'
      })
      dispatch(loadDateSync(result.data.data.rows))
  }
}
const DeleteAsync=()=>{
  return async(dispatch)=>{
    let result= await get ({
      url:'/api/search/deleteHistory'
    })
    dispatch(loadDateSync(result.data.data.rows))
}
}

                      
export{
  loadDateSync,
  loadDateAsync,
  DeleteAsync,
}