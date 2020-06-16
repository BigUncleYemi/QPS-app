import {combineReducers} from 'redux';
import {authReducer} from './AuthReducer';
import {productReducer} from './ProductReducer';

export default combineReducers({
  auth: authReducer,
  product: productReducer,
});
