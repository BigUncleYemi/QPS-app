import * as ActionType from '../types';
import {Service} from '../service';

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
    console.log(response);

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

export default {CreateUser, LoginUser, ConfirmUserOtp, SendUserOtp};
