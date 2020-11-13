import {takeEvery, put, call} from "redux-saga/effects"

import {get} from "@/utils/http";

import actionCreator from "@/my/actionCreator";

function* loadDataSync() {
  let res = yield call(get, {url: "http://localhost:9000/api/userInfo"})
  yield put(actionCreator.loadDataSync(res.data))
}

function* loadData() {
  yield takeEvery("loadDataSaga", loadDataSync)
}

export default loadData