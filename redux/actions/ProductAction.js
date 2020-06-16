import * as ActionType from '../types';
import {Service} from '../service';

const getAllProduct = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_ALL_PRODUCT,
    });

    const response = await Service.Product.getAllProduct(data);

    dispatch({
      payload: {
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

export default {GetAllProduct};
