import {get, post} from '../../utils/Api';

const registerUser = data => post('/api/auth/register', data);
const loginUser = data => get('/api/auth/login', data);
const confirmUserOTp = data => post('/api/auth/confirm_otp', data);
const sendUserOtp = data => post('/api/auth/send_otp', data);

export default {
	registerUser,
	loginUser,
	confirmUserOTp,
	sendUserOtp,
};
