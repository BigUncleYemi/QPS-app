import {get, post} from '../../utils/Api';

const postOrder = data => post('/orders/send', data);
const getOrder = data => get(`/orders/user/${data.userId}`);

export default {
  postOrder,
  getOrder,
};
