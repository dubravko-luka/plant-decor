import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import windowReducer from './reducers/windowReducer';
import globalReducer from './reducers/globalReducer';
import userReducer from './reducers/userReducer';

const rootReducer = combineReducers({
  window: windowReducer,
  global: globalReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
