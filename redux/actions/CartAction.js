import * as ActionType from '../types';
import {
  storeData,
  removeValue,
  getData,
  getCartItems,
} from '../../utils/helperFunc';

const addToCart = ({
  Product,
  productId,
  quantity,
  price,
  design,
  setting,
  priceSet,
}) => async dispatch => {
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
    data[productId] = {
      ...Product,
      priceSet,
      setting,
      quantity,
      price,
      design,
      productId,
    };
    await storeData('QPScart', data);
    const cartLocal = await getData('QPScart');
    const payload = await getCartItems(cartLocal);

    dispatch({
      payload: {
        cart: payload,
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

const updateItemInCart = product => async dispatch => {
  try {
    dispatch({
      payload: {
        error: false,
        loading: true,
      },
      type: ActionType.UPDATE_ITEM_IN_CART,
    });

    let data = await getData('QPScart');
    data[product.productId] = {
      ...data[product.productId],
      setting: product.setting,
      quantity: product.quantity,
      price: product.price,
    };
    await storeData('QPScart', data);
    const cartLocal = await getData('QPScart');
    const payload = await getCartItems(cartLocal);

    dispatch({
      payload: {
        cart: payload,
      },
      type: ActionType.UPDATE_ITEM_IN_CART_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      payload: {
        error: err,
        loading: false,
      },
      type: ActionType.UPDATE_ITEM_IN_CART_FAILED,
    });
  }
};

const UpdateItemInCart = data => dispatch => {
  dispatch(updateItemInCart(data));
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
    await delete data[productId];
    await storeData('QPScart', data);
    const cartLocal = await getData('QPScart');
    const payload = await getCartItems(cartLocal);

    dispatch({
      payload: {
        cart: payload,
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

const GetAllCartItem = () => dispatch => {
  dispatch(getAllCartItem());
};

export default {
  AddToCart,
  RemoveFromCart,
  GetAllCartItem,
  UpdateItemInCart,
};
