import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import mainReducer from "./main/main.reducer";
import thunk from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from "history";

export const ROUTER_STORE = "router";
export const MAIN_STORE = "MAIN_STORE";
export const history = createBrowserHistory({ basename: "/" });

export const rootReducer = combineReducers({
  [ROUTER_STORE]: connectRouter(history),
  [MAIN_STORE]: mainReducer,
});

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
  );

  return store;
};

export default configureStore;
