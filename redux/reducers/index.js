import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer';
import {productReducer} from './ProductReducer';
import {cartReducer} from './CartReducer';
import {quoteReducer} from './QuoteReducer';
import {orderReducer} from './OrderReducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer,
  quote: quoteReducer,
  order: orderReducer,
});
