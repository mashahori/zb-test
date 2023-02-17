import { call, takeEvery, put, select } from "redux-saga/effects";
import Axios from "axios";

import { setApiData, setLocalData } from "../itemsSlice";
import { sagaActions } from "../sagaActions";
import { saveStore } from "utils/localStorage";
import { IItem } from "utils/types";

let callAPI = async (url: string) => await Axios(url);

export function* getData() {
  try {
    let result: { data: IItem[] } = yield call(() =>
      callAPI("https://api.sampleapis.com/coffee/iced")
    );
    yield saveStore(result.data);
    yield put(setApiData(result.data));

    const localData: IItem[] = yield select((state) => state.items.localItems);
    if (!localData.length) {
      yield put(setLocalData(result.data));
    }
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* fetchDataSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, getData);
}
