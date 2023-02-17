import { takeEvery, put, select } from "redux-saga/effects";

import { setLocalData } from "../itemsSlice";
import { sagaActions } from "../sagaActions";
import { saveStore } from "utils/localStorage";
import { IItem, IAction } from "utils/types";

export function* deleteItem({ payload }: IAction) {
  try {
    const localItems: IItem[] = yield select((state) => state.items.localItems);
    const editedLocalItems = localItems.map((el) => {
      if (el.id === payload) {
        return { ...el, status: "deleted" };
      }
      return el;
    });

    yield put(setLocalData(editedLocalItems));
    yield saveStore(editedLocalItems);
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export default function* deletItemSaga() {
  yield takeEvery(sagaActions.DELETE_ITEM_SAGA, deleteItem);
}
