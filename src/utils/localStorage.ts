import { IItem } from "./types";

export const saveStore = (items: IItem[]) => {
  try {
    localStorage.setItem("localItems", JSON.stringify(items));
  } catch (error) {
    console.log(error);
  }
};

export const getSavedStore = () => {
  let savedStore = [];

  try {
    const store = localStorage.getItem("localItems");
    if (store) {
      savedStore = JSON.parse(store);
    }
  } catch (error) {
    console.log(error);
  }

  return savedStore;
};

export const clearStore = () => {
  localStorage.removeItem("localItems");
};
