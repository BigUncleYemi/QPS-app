import * as ActionType from '../types';

const initialState = {
  loading: false,
  productLoader: false,
  error: null,
  allProduct: [],
  hasMore: false,
  productData: {},
  listOfCategories: [],
  productReview: null,
  productReviewCont: null,
  productPrice: null,
};

export const productReducer = (state = initialState, action) => {
  console.log(JSON.stringify(action));
  switch (action.type) {
    case ActionType.GET_A_PRODUCT_PRICE:
      return {
        ...state,
        loading: true,
        error: false,
        productPrice: {},
      };
    case ActionType.GET_A_PRODUCT_PRICE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productPrice: action.payload.productPrice,
      };
    case ActionType.GET_A_PRODUCT_PRICE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.GET_PRODUCT:
      return {
        ...state,
        productLoader: true,
        error: false,
        productData: {},
      };
    case ActionType.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        productLoader: false,
        error: false,
        productData: action.payload.productData,
      };
    case ActionType.GET_PRODUCT_FAILED:
      return {
        ...state,
        productLoader: false,
        error: action.payload.error,
      };
    case ActionType.GET_ALL_PRODUCT:
      return {
        ...state,
        loading: true,
        error: false,
        allProduct: action.payload.page === 1 ? [] : state.allProduct,
      };
    case ActionType.GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        hasMore: action.payload.allProduct.data.length >= 20 ? true : false,
        allProduct:
          action.payload.page === 1
            ? action.payload.allProduct
            : {
                ...action.payload.allProduct,
                data: state.allProduct.data.concat(
                  action.payload.allProduct.data,
                ),
              },
      };
    case ActionType.GET_ALL_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.GET_ALL_CATEGORY_LIST:
      return {
        ...state,
        loading: true,
        error: false,
        listOfCategories: [],
      };
    case ActionType.GET_ALL_CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        listOfCategories: action.payload.listOfCategories,
      };
    case ActionType.GET_ALL_CATEGORY_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.POST_PRODUCT_REVIEW:
      return {
        ...state,
        loading: true,
        error: false,
        productReview: null,
      };
    case ActionType.POST_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productReview: action.payload.productReview,
      };
    case ActionType.POST_PRODUCT_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ActionType.GET_PRODUCT_REVIEW:
      return {
        ...state,
        loading: true,
        error: false,
        productReviewCont: null,
      };
    case ActionType.GET_PRODUCT_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        productReviewCont: action.payload.productReviewCont,
      };
    case ActionType.GET_PRODUCT_REVIEW_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
