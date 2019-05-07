import { DATA_LOADED, API_ERROR, DATA_REQUESTED } from "../constants/action-types";
import { takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

/**
 * Triggers new workerSaga task on each DATA_REQUESTED
 */
export default function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}
/**
 * Performs async increment task
 */
function* workerSaga() {
    try {
      const payload = yield call(getData);
      yield put({ type: DATA_LOADED, payload });
    } catch (err) {
      yield put({ type: API_ERROR, payload: err });
    }
}
/** 
 * Load JSON data
*/
async function getData() {
  const ax = axios.create({
    baseURL: "/data.json",
    responseType: "json"
  });
  var response = await ax.get();

  return response.data;
}