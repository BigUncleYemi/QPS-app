import {get, post} from '../../utils/Api';

const postOrder = data => post('/orders/send', data);
const getOrder = data => get(`/tracking/history?id=${data.userId}`);

export default {
  postOrder,
  getOrder,
};
