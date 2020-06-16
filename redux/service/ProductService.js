import {get, post} from '../../utils/Api';

const getAllProduct = () => get('/products/all');

export default {
  getAllProduct,
};
