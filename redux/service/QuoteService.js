import {get, post} from '../../utils/Api';

const postRequestQuote = data => post('/price/request_quote', data);

export default {
  postRequestQuote,
};
