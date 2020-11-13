import { LOADDATA } from './actionTypes'

import http from '@/utils/http.js'


const loadDateSync = list => {
  return {
    type: LOADDATA,
    list
  }
}

const loadDateAsync = () => {
  return async (dispatch) => {
    let result = await http.get('http://localhost:9000/api/articleList')
    dispatch(loadDateSync(result.data.data))
  }
}

export {
  loadDateSync,
  loadDateAsync
}