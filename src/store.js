import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import logger from "redux-logger";

const store = createStore(
  reducer,
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
