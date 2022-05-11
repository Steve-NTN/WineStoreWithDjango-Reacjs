import { combineReducers } from 'redux';
import userReducer from "./user";
import loadingReducer from './loading';
import cartReducer from './cart';

export default combineReducers({
  userReducer,
  loadingReducer,
  cartReducer
})