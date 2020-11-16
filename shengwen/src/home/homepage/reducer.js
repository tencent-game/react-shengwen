import {LOADDATA} from "./actionTypes"


const defaultState={
  list:[],
  
}
const reducer=(state=defaultState,action)=>{
    // console.log(action)
  switch(action.type){
    case LOADDATA:
      return{
        list:action.list
      }
    default:
      return state
  }
}
export default reducer