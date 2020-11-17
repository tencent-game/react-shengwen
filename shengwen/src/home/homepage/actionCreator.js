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
      url:'/api/article/findAll?limit=10&offset=0 '
    })
    //  console.log(result.data.data.rows);
     dispatch(loadDateSync(result.data.data.rows))
}
} 
              
export{
  loadDateSync,
  loadDateAsync,
}