import * as ActionType from '../types';
import {Service} from '../service';

const makeOrder = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.SEND_ORDER,
    });

    const response = await Service.Order.postOrder(data);

    dispatch({
      payload: {
        postOrder: response.data,
      },
      type: ActionType.SEND_ORDER_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.SEND_ORDER_FAILED,
    });
  }
};

const MakeOrder = data => dispatch => {
  dispatch(makeOrder(data));
};

const getOrder = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_ALL_ORDER,
    });

    const response = await Service.Order.getOrder(data);

    dispatch({
      payload: {
        order: response.data,
      },
      type: ActionType.GET_ALL_ORDER_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_ALL_ORDER_FAILED,
    });
  }
};

const GetOrder = data => dispatch => {
  dispatch(getOrder(data));
};

export default {
  MakeOrder,
  GetOrder,
};
