import {get, post} from '../../utils/Api';

const registerUser = data => post('/auth/register', data);
const loginUser = data => {
  return post('/auth/login', data);
};
const confirmUserOTp = data => post('/auth/confirm_otp', data);
const sendUserOtp = data => post('/auth/send_otp', data);
const resetPassword = data => get(`auth/reset_password/${data.username}`);

export default {
  registerUser,
  loginUser,
  confirmUserOTp,
  sendUserOtp,
  resetPassword,
};
