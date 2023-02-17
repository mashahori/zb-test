import { takeEvery, put, select } from "redux-saga/effects";

import { setLocalData } from "../itemsSlice";
import { sagaActions } from "../sagaActions";
import { saveStore } from "utils/localStorage";
import { IAction, IItem } from "utils/types";

export function* addItem({ payload }: IAction) {
  try {
    console.log(payload);
    const localItems: IItem[] = yield select((state) => state.items.localItems);

    yield put(setLocalData([...localItems, payload]));
    yield saveStore([...localItems, payload]);
  } catch (e) {
    yield put({ type: "FAILED" });
  }
}

export default function* addItemSaga() {
  yield takeEvery(sagaActions.ADD_ITEM_SAGA, addItem);
}
