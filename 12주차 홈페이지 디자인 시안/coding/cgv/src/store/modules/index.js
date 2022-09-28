import { combineReducers } from 'redux';
import movieReducer from './moviecharts';
import movieSearchReducer from './moviesearch';
import subRegionReducer from './subregion';
import mainRegionReducer from './mainregion';
import boxofficeReducer from './boxofficelist';

const RootReducer = combineReducers({
  movieReducer, movieSearchReducer, subRegionReducer, mainRegionReducer, boxofficeReducer
})

export default RootReducer;
