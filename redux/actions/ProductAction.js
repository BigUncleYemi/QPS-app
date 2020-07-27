import * as ActionType from '../types';
import {Service} from '../service';

const getFeatureProduct = () => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_FEATURED_PRODUCT,
    });

    const response = await Service.Product.getFeatureProduct();
    // console.log(response,'who you');

    dispatch({
      payload: {
        error: false,
        loading: false,
        featureProduct: response.data,
      },
      type: ActionType.GET_FEATURED_PRODUCT_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_FEATURED_PRODUCT_FAILED,
    });
  }
};

const GetFeatureProduct = () => dispatch => {
  dispatch(getFeatureProduct());
};

const getAllProduct = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        page: data.page,
        loading: true,
      },
      type: ActionType.GET_ALL_PRODUCT,
    });

    const response = await Service.Product.getAllProduct(data);
    // console.log(response,'who you');

    dispatch({
      payload: {
        page: data.page,
        allProduct: response.data,
      },
      type: ActionType.GET_ALL_PRODUCT_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_ALL_PRODUCT_FAILED,
    });
  }
};

const GetAllProduct = data => dispatch => {
  dispatch(getAllProduct(data));
};

const getFilteredProduct = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        page: data.page,
        loading: true,
      },
      type: ActionType.GET_FILTER_PRODUCT,
    });

    const response = await Service.Product.getAllProduct(data);
    // console.log(response,'who you');

    dispatch({
      payload: {
        page: data.page,
        filterProduct: response.data,
      },
      type: ActionType.GET_FILTER_PRODUCT_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_FILTER_PRODUCT_FAILED,
    });
  }
};

const GetFilteredProduct = data => dispatch => {
  dispatch(getFilteredProduct(data));
};

const getAProduct = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_PRODUCT,
    });

    const response = await Service.Product.getAProduct({
      productId: data.productId,
    });
    const related = await Service.Product.getAllProduct({
      page: data.page,
      category: data.category,
    });

    dispatch({
      payload: {
        productData: response.data,
        relatedProduct: related.data,
      },
      type: ActionType.GET_PRODUCT_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_PRODUCT_FAILED,
    });
  }
};

const GetAProduct = data => dispatch => {
  dispatch(getAProduct(data));
};

const getListOfCategory = () => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_ALL_CATEGORY_LIST,
    });

    const response = await Service.Product.getListOfCategories();
    dispatch({
      payload: {
        listOfCategories: response.data,
      },
      type: ActionType.GET_ALL_CATEGORY_LIST_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_ALL_CATEGORY_LIST_FAILED,
    });
  }
};

const GetListOfCategory = () => dispatch => {
  dispatch(getListOfCategory());
};

const postProductReview = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.POST_PRODUCT_REVIEW,
    });

    const response = await Service.Product.postProductReview(data);
    dispatch({
      payload: {
        productReview: response.data,
      },
      type: ActionType.POST_PRODUCT_REVIEW_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.POST_PRODUCT_REVIEW_FAILED,
    });
  }
};

const PostProductReview = data => dispatch => {
  dispatch(postProductReview(data));
};

const getProductReview = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_PRODUCT_REVIEW,
    });

    const response = await Service.Product.getProductReview(data);
    dispatch({
      payload: {
        productReviewCont: response.data,
      },
      type: ActionType.GET_PRODUCT_REVIEW_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_PRODUCT_REVIEW_FAILED,
    });
  }
};

const GetProductReview = data => dispatch => {
  dispatch(getProductReview(data));
};

const getProductPrice = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_A_PRODUCT_PRICE,
    });

    const response = await Service.Product.getProductPrice(data);
    dispatch({
      payload: {
        productPrice: response.data,
      },
      type: ActionType.GET_A_PRODUCT_PRICE_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_A_PRODUCT_PRICE_FAILED,
    });
  }
};

const GetProductPrice = data => dispatch => {
  dispatch(getProductPrice(data));
};

export default {
  GetAllProduct,
  GetFilteredProduct,
  GetAProduct,
  GetListOfCategory,
  PostProductReview,
  GetProductReview,
  GetProductPrice,
  GetFeatureProduct,
};
