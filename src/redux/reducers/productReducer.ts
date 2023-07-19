import { ActionTypes } from "../constants/actionTypes";

const initialState = {
  products: [],
};

export const productsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
