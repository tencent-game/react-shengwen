import {createStore} from "redux"
import Immutable from "immutable"
// import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"

const initialState = Immutable.Map()

// let sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,initialState)

export default store