export interface IItem {
  title: string;
  status?: string;
  description?: string;
  ingredients?: string[];
  image?: string;
  id: string;
}

export interface IState {
  items: {
    apiItems: IItem[];
    localItems: IItem[];
  };
}

export interface IAction {
  type: string;
  payload?: any;
}
