import * as ActionType from '../types';
import {
  storeData,
  removeValue,
  getData,
  getCartItems,
} from '../../utils/helperFunc';

const addToCart = ({Product, productId, quantity, price}) => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.ADD_ITEM_TO_CART,
    });

    let data = await getData('QPScart');
    data ? data : (data = {});
    data[productId] = {...Product, quantity, quaPrice: price};
    await storeData('QPScart', data);

    dispatch({
      payload: {
        cart: data,
      },
      type: ActionType.ADD_ITEM_TO_CART_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.ADD_ITEM_TO_CART_FAILED,
    });
  }
};

const AddToCart = data => dispatch => {
  dispatch(addToCart(data));
};

const removeFromCart = productId => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.REMOVE_ITEM_FROM_CART,
    });

    const data = await getData('QPScart');
    delete data[productId];
    await storeData('QPScart', data);

    dispatch({
      payload: {
        cart: data,
      },
      type: ActionType.REMOVE_ITEM_FROM_CART_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.REMOVE_ITEM_FROM_CART_FAILED,
    });
  }
};

const RemoveFromCart = data => dispatch => {
  dispatch(removeFromCart(data));
};

const getAllCartItem = () => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.GET_ITEM_FROM_CART,
    });

    const cartLocal = await getData('QPScart');
    const data = await getCartItems(cartLocal);
    console.log(cartLocal, data)

    dispatch({
      payload: {
        cart: data,
      },
      type: ActionType.GET_ITEM_FROM_CART_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.GET_ITEM_FROM_CART_FAILED,
    });
  }
};

const GetAllCartItem = data => dispatch => {
  dispatch(getAllCartItem(data));
};

export default {
  AddToCart,
  RemoveFromCart,
  GetAllCartItem,
};
