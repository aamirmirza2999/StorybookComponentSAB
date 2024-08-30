import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import commonReducer from "../reducers/CommonReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//  const composeEnhancers = compose;

const rootReducer = combineReducers({
  commonReducer,

});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
