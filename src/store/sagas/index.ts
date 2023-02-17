import { fork } from "redux-saga/effects";
import fetchDataSaga from "./fetchDataSaga";
import deleteItemSaga from "./deleteItemSaga";
import addItemSaga from "./addItemSaga";
import clearItemsSaga from "./clearItemsSaga";

export function* rootSaga() {
  yield fork(fetchDataSaga);
  yield fork(deleteItemSaga);
  yield fork(addItemSaga);
  yield fork(clearItemsSaga);
}
