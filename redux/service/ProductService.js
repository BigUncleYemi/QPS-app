import {get, post} from '../../utils/Api';

const getAllProduct = data =>
  get(
    `/products/all/${data.page}${
      data.category ? `?category=${data.category}` : ''
    }`,
  );
const getAProduct = data => get(`/products/${data.productId}`);
const getListOfCategories = () => get('/products/get/category');
const postProductReview = data => post('/reviews/send', data);
const getProductReview = data => get(`/reviews/product/${data.productId}`);
const getProductPrice = data => get(`/price/product/${data.productId}`);
const getFeatureProduct = () => get('/slider/all');

export default {
  getAllProduct,
  getAProduct,
  getListOfCategories,
  postProductReview,
  getProductReview,
  getProductPrice,
  getFeatureProduct,
};
