import * as ActionType from '../types';

const initialState = {
  loading: false,
  error: null,
  postOrder: null,
  order: null,
};

export const orderReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.SEND_ORDER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.SEND_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        postOrder: action.payload.postOrder,
      };
    case ActionType.SEND_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.GET_ALL_ORDER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.GET_ALL_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        order: action.payload.order,
      };
    case ActionType.GET_ALL_ORDER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
