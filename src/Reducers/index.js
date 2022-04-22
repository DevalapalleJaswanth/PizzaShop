import User from './User';
import PizzaList from './PizzaList';
//import Items from './Items';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  User,
  PizzaList,
});

export default rootReducer;
