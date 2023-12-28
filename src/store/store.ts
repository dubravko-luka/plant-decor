import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';
import globalReducer from './reducers/globalReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  global: globalReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
