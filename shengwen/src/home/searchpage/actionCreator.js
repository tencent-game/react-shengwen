import {LOADDATA} from './actionTypes'

import http from '@/utils/http.js'


const loadDateSync=list=>{
    return {
      type:LOADDATA,
      list
    }
}

const  loadDateAsync=()=>{
  return async(dispatch)=>{
      let result= await http.get ({
        url:'/api/searchList'
      })
      //  console.log(result.data.data);
      dispatch(loadDateSync(result.data.data))
  }
}
                      
export{
  loadDateSync,
  loadDateAsync
}