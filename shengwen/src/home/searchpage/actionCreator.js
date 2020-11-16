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
      let result= await get (
        '/api/search/history'
      )
      let data=result.data.data.rows
      var resultHis = [];
      var obj = {};
      for(var i =0; i<data.length; i++){
       if(!obj[data[i].historyText]){
        resultHis.push(data[i]);
         obj[data[i].historyText] = true;
       }
      }
      // console.log(resultHis);
      dispatch(loadDateSync(resultHis))
  }
}
const DeleteAsync=()=>{
  return async(dispatch)=>{
    let result= await get (
      '/api/search/deleteHistory'
    )
    dispatch(loadDateSync(result.data.data.rows))
}
}

                      
export{
  loadDateSync,
  loadDateAsync,
  DeleteAsync,
}