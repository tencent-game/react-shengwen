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
<<<<<<< HEAD
      let result= await get (
        '/api/articleList'
      )
        // console.log(result.data.data);
      dispatch(loadDateSync(result.data.data))
  }
=======
    let result= await get ({
      url:'/api/article/findAll?limit=10&offset=0 '
    })
    //  console.log(result.data.data.rows);
     dispatch(loadDateSync(result.data.data.rows))
>>>>>>> master
}
} 
              
export{
  loadDateSync,
  loadDateAsync,
}