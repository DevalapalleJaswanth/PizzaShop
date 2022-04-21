import User from './User';
import PizzaList from './PizzaList';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  User,
  PizzaList,
});

export default rootReducer;
