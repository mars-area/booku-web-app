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

const initialState = {
  isLoadingGetCategory: false,
  isSuccessGetCategory: false,
  isErrorGetCategory: false,
  dataGetCategory: [],

  isLoadingGetBooks: false,
  isSuccessGetBooks: false,
  isErrorGetBooks: false,
  dataGetBooks: [],
};

const getCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GetCategoryStart:
      return {
        ...state,
        isLoadingGetCategory: true,
        isSuccessGetCategory: false,
        isErrorGetCategory: false,
      };
    case GetCategorySuccess:
      return {
        ...state,
        isLoadingGetCategory: false,
        isSuccessGetCategory: true,
        isErrorGetCategory: false,
        dataGetCategory: action.payload,
      };
    case GetCategoryFail:
      return {
        ...state,
        isLoadingGetCategory: false,
        isSuccessGetCategory: false,
        isErrorGetCategory: true,
      };
    case GetCategoryReset:
      return {
        ...state,
        isLoadingGetCategory: false,
        isSuccessGetCategory: true,
        isErrorGetCategory: false,
      };
    case GetBooksStart:
      return {
        ...state,
        isLoadingGetBooks: true,
        isSuccessGetBooks: false,
        isErrorGetBooks: false,
      };
    case GetBooksSuccess:
      return {
        ...state,
        isLoadingGetBooks: false,
        isSuccessGetBooks: true,
        isErrorGetBooks: false,
        dataGetBooks: action.payload,
      }
    case GetBooksFail:
      return {
        ...state,
        isLoadingGetBooks: false,
        isSuccessGetBooks: false,
        isErrorGetBooks: true,
      }
    case GetBooksReset:
      return {
        ...state,
        isLoadingGetBooks: false,
        isSuccessGetBooks: false,
        isErrorGetBooks: false,
      }
    default:
      return state;
  }
};

export default getCategoryReducer;
