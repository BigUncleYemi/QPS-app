import * as ActionType from '../types';

const initialState = {
  loading: false,
  error: null,
  user: null,
  isUserLoggedIn: false,
  isUserRegister: false,
  userOTP: null,
  confirmOTP: false,
};

export const authReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ActionType.USER_REGISTER:
      return {
        ...state,
        loading: true,
        isUserRegister: false,
        isUserLoggedIn: false,
        error: false,
      };
    case ActionType.USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        isUserRegister: true,
        isUserLoggedIn: false,
        error: false,
      };
    case ActionType.USER_REGISTER_FAILED:
      return {
        ...state,
        loading: false,
        isUserRegister: false,
        isUserLoggedIn: false,
        error: action.payload.error,
      };

    case ActionType.USER_LOGIN:
      return {
        ...state,
        loading: true,
        isUserRegister: false,
        isUserLoggedIn: false,
        user: null,
        error: false,
      };
    case ActionType.USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isUserRegister: false,
        isUserLoggedIn: true,
        user: action.payload.user,
        error: false,
      };
    case ActionType.USER_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isUserRegister: false,
        isUserLoggedIn: false,
        user: null,
        error: action.payload.error,
      };

    case ActionType.USER_CONFIRM_OTP:
      return {
        ...state,
        loading: true,
        error: false,
        confirmOTP: false,
      };
    case ActionType.USER_CONFIRM_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmOTP: action.payload.confirmOTP,
        error: false,
      };
    case ActionType.USER_CONFIRM_OTP_FAILED:
      return {
        ...state,
        loading: false,
        confirmOTP: false,
        error: action.payload.error,
      };

    case ActionType.USER_OTP:
      return {
        ...state,
        loading: true,
        error: false,
        userOTP: null,
      };
    case ActionType.USER_OTP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userOTP: action.payload.userOTP,
      };
    case ActionType.USER_OTP_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        userOTP: null,
      };
    default:
      return state;
  }
};
