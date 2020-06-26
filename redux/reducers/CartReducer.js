import * as ActionType from '../types';

const initialState = {
  loading: false,
  error: null,
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.GET_ITEM_FROM_CART:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.GET_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cart: action.payload.cart,
      };
    case ActionType.GET_ITEM_FROM_CART_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.ADD_ITEM_TO_CART:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cart: action.payload.cart,
      };
    case ActionType.ADD_ITEM_TO_CART_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.REMOVE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        cart: action.payload.cart,
      };
    case ActionType.REMOVE_ITEM_FROM_CART_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
