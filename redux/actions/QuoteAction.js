import * as ActionType from '../types';
import {Service} from '../service';

const requestQuote = data => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.REQUEST_QUOTE,
    });

    const response = await Service.Quote.postRequestQuote(data);

    dispatch({
      payload: {
        requestQuote: response.data,
      },
      type: ActionType.REQUEST_QUOTE_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.REQUEST_QUOTE_FAILED,
    });
  }
};

const RequestQuote = data => dispatch => {
  dispatch(requestQuote(data));
};

export default {
  RequestQuote,
};
