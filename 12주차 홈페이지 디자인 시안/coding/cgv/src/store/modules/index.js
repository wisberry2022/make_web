import { combineReducers } from 'redux';
import movieReducer from './moviecharts';
import movieSearchReducer from './moviesearch';
import subRegionReducer from './subregion';
import mainRegionReducer from './mainregion';
import boxofficeReducer from './boxofficelist';
import storeReducer from './substore';
import currentEventReducer from './currentevent';

const RootReducer = combineReducers({
  movieReducer, movieSearchReducer, subRegionReducer, mainRegionReducer, boxofficeReducer, storeReducer, currentEventReducer
})

export default RootReducer;
