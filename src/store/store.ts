import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { itemsSlice } from "./itemsSlice";
import { rootSaga } from "./sagas";

let sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
