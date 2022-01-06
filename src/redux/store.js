import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import getCategoryReducer from './reducers/book';

const appReducer = combineReducers({
  getCategory: getCategoryReducer
});

const rootReducers = (state, action) => {
  return appReducer(state, action);
};

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducers, middleware);

export default store;