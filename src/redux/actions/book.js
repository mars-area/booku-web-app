import axios from "axios";
import {
  GetCategoryStart,
  GetCategorySuccess,
  GetCategoryFail,
  GetCategoryReset,
  GetBooksStart,
  GetBooksSuccess,
  GetBooksFail,
  GetBooksReset,
} from "../actionType";

export const getCategoryAction = (data, history) => {
  return async (dispatch, getState) => {
    dispatch({ type: GetCategoryStart });
    try {
      const result = await axios.get("/fee-assessment-categories", undefined, {
        withCredentials: true,
      });
      dispatch({ type: GetCategorySuccess, payload: result.data });
    } catch (error) {
      dispatch({ type: GetCategoryFail, payload: error });
    }
  };
};

export const getCategoryResetAction = () => {
  return (dispatch, getState) => {
    dispatch({ type: GetCategoryReset });
  };
};

export const getBooksAction = (data, history) => {
  const link = `/fee-assessment-books?categoryId=${data.id}&page=${data.page}&size=${data.limit}`;
  console.log('link:', link);
  return async (dispatch, getState) => {
    dispatch({ type: GetBooksStart });
    try {
      const result = await axios.get(link, {
        withCredentials: true,
      });
      dispatch({ type: GetBooksSuccess, payload: result?.data });
    } catch (error) {
      dispatch({ type: GetBooksFail, payload: error });
    }
  };
}

export const getBooksResetAction = () => {
  return (dispatch, getState) => {
    dispatch({ type: GetBooksReset });
  };
}