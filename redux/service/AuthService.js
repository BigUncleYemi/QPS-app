import {get, post} from '../../utils/Api';

const registerUser = data => post('/auth/register', data);
const loginUser = data => get('/auth/login', data);
const confirmUserOTp = data => post('/auth/confirm_otp', data);
const sendUserOtp = data => post('/auth/send_otp', data);

export default {
  registerUser,
  loginUser,
  confirmUserOTp,
  sendUserOtp,
};
