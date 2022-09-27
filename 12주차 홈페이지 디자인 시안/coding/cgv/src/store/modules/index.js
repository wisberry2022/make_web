import { combineReducers } from 'redux';
import movieReducer from './moviecharts';
import movieSearchReducer from './moviesearch';

const RootReducer = combineReducers({
  movieReducer, movieSearchReducer
})

export default RootReducer;
