import { combineReducers } from 'redux';
import userReducer from "./user";
import loadingReducer from './loading';

export default combineReducers({
  userReducer,
  loadingReducer
})