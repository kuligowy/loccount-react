import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import loccountApp from "./reducers";

const loggerMiddleware = createLogger();

export default function configureStore(preloadedState) {
  return createStore(
    loccountApp,
    //preloadedState,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
}
