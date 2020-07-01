import * as ActionType from '../types';

const initialState = {
  loading: false,
  error: null,
  requestQuote: null,
};

export const quoteReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ActionType.REQUEST_QUOTE:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.REQUEST_QUOTE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        requestQuote: action.payload.requestQuote,
      };
    case ActionType.REQUEST_QUOTE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
