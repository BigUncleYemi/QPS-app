import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer';
import {productReducer} from './ProductReducer';
import {cartReducer} from './CartReducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
});
