import * as ActionType from '../types';

const initialState = {
  loading: false,
  error: null,
  user: null,
  isUserLoggedIn: false,
  isUserRegister: false,
  userOTP: null,
  confirmOTP: false,
  changePassword: null,
  forgetPassword: null,
};

export const authReducer = (state = initialState, action) => {
  // console.log(action);
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
    case ActionType.USER_LOGOUT:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionType.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        isUserRegister: false,
        isUserLoggedIn: false,
        user: null,
        error: false,
      };
    case ActionType.USER_LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
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

    case ActionType.USER_CHANGE_PASSWORD:
      return {
        ...state,
        loading: true,
        error: false,
        changePassword: null,
      };
    case ActionType.USER_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        changePassword: action.payload.changePassword,
      };
    case ActionType.USER_CHANGE_PASSWORD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        changePassword: null,
      };

    case ActionType.USER_FORGET_PASSWORD:
      return {
        ...state,
        loading: true,
        error: false,
        forgetPassword: null,
      };
    case ActionType.USER_FORGET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        forgetPassword: action.payload.forgetPassword,
      };
    case ActionType.USER_FORGET_PASSWORD_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        forgetPassword: null,
      };
    default:
      return state;
  }
};
