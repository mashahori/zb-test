import { createSlice } from "@reduxjs/toolkit";

import { getSavedStore } from "utils/localStorage";

export const itemsSlice = createSlice({
  name: "items",
  initialState: {
    apiItems: [],
    localItems: getSavedStore() || [],
  },
  reducers: {
    setApiData: (state, action) => {
      return {
        ...state,
        apiItems: action.payload,
      };
    },
    setLocalData: (state, action) => {
      return {
        ...state,
        localItems: action.payload,
      };
    },
  },
});

export const { setApiData, setLocalData } = itemsSlice.actions;
