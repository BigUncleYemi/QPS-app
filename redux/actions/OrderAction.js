import * as ActionType from '../types';
import {Service} from '../service';
import {removeValue} from '../../utils/helperFunc';

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
    if (response.data) {
      await removeValue('QPScart');
    }

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

const resetOrder = data => async dispatch => {
  dispatch({
    payload: {
      postOrder: null,
    },
    type: ActionType.RESET_ORDER,
  });
};

const ResetOrder = data => dispatch => {
  dispatch(resetOrder(data));
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
  ResetOrder,
};
