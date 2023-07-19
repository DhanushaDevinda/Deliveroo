import axios from "axios";
import { ActionTypes } from "../constants/actionTypes";

export const getProducts = (): any => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get("/employee");
      dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
};
