import { combineReducers } from 'redux';
import componentsReducer from './componentsReducer';


// redux only works with one reducer, use combine reducer as work around for multiple reducers


// all reducers will be imported and used here
export default combineReducers({
    componentsReducer
  });
