import {applyMiddleware, createStore} from "redux"
import Immutable from "immutable"
import createSagaMiddleware from "redux-saga"
import reducer from "./reducer"
import sagas from "@/store/sagas";

const initialState = Immutable.Map()

let sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))

sagas.forEach(saga => sagaMiddleware.run(saga))

export default store