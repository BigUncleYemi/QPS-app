import {get, post} from '../../utils/Api';

const postRequestQuote = data => post('/request/send', data);

export default {
  postRequestQuote,
};
