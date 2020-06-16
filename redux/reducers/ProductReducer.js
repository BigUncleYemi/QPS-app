import * as ActionType from '../types';

const initialState = {
  loading: false,
  error: null,
  allProduct: [],
};

export const productReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.GET_ALL_PRODUCT:
      return {
        ...state,
        loading: true,
        error: false,
        allProduct: [],
      };
    case ActionType.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        allProduct: action.payload.allProduct,
      };
    case ActionType.GET_ALL_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
