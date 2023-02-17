import { takeEvery, put } from "redux-saga/effects";

import { setLocalData, setApiData } from "../itemsSlice";
import { sagaActions } from "../sagaActions";
import { clearStore } from "utils/localStorage";

export function* clearItems() {
  console.log("!");
  try {
    yield put(setLocalData([]));
    yield put(setApiData([]));
    yield clearStore();
  } catch (e) {
    yield put({ type: "FAILED" });
  }
}

export default function* addItemSaga() {
  yield takeEvery(sagaActions.CLEAR_ITEMS_SAGA, clearItems);
}
