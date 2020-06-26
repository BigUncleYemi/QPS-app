import * as ActionType from '../types';
import {Service} from '../service';
import {storeData, removeValue} from '../../utils/helperFunc';

const createUser = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.USER_REGISTER,
    });

    const response = await Service.Auth.registerUser(data);
    dispatch({
      payload: {
        registerUser: response.data,
      },
      type: ActionType.USER_REGISTER_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.USER_REGISTER_FAILED,
    });
  }
};

const CreateUser = data => dispatch => {
  dispatch(createUser(data));
};

const loginUser = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.USER_LOGIN,
    });

    const response = await Service.Auth.loginUser(data);

    await storeData('current-user', response.data);

    dispatch({
      payload: {
        user: response.data,
      },
      type: ActionType.USER_LOGIN_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.USER_LOGIN_FAILED,
    });
  }
};

const LoginUser = data => dispatch => {
  dispatch(loginUser(data));
};

const setUser = data => async dispatch => {
  if (!data) {
    return;
  }
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.USER_LOGIN,
    });

    await storeData('current-user', data);

    dispatch({
      payload: {
        user: data,
      },
      type: ActionType.USER_LOGIN_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.USER_LOGIN_FAILED,
    });
  }
};

const SetUser = data => dispatch => {
  console.log(data, dispatch, 'lklk');
  dispatch(setUser(data));
};

const logoutUser = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.USER_LOGOUT,
    });

    await removeValue('current-user');
    await removeValue('QPScart');

    dispatch({
      payload: {
        isUserLoggedIn: false,
        isUserRegister: false,
        user: null,
      },
      type: ActionType.USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.USER_LOGOUT_FAILED,
    });
  }
};

const LogoutUser = data => dispatch => {
  dispatch(logoutUser(data));
};

const confirmUserOtp = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.USER_CONFIRM_OTP,
    });

    const response = await Service.Auth.confirmUserOTp(data);

    dispatch({
      payload: {
        confirmOTP: response.data,
      },
      type: ActionType.USER_CONFIRM_OTP_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.USER_CONFIRM_OTP_FAILED,
    });
  }
};

const ConfirmUserOtp = data => dispatch => {
  dispatch(confirmUserOtp(data));
};

const sendUserOtp = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.USER_OTP,
    });

    const response = await Service.Auth.sendUserOtp(data);
    // console.log(response);

    dispatch({
      payload: {
        userOTP: response.data,
      },
      type: ActionType.USER_OTP_SUCCESS,
    });
  } catch (err) {
    console.log(err, err.response);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.USER_OTP_FAILED,
    });
  }
};

const SendUserOtp = data => dispatch => {
  dispatch(sendUserOtp(data));
};

export default {
  CreateUser,
  LoginUser,
  ConfirmUserOtp,
  SendUserOtp,
  LogoutUser,
  SetUser,
};
