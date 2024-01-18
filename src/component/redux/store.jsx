import { createStore } from "redux";
import { RootReducer } from "./rootReducer";
import { applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

export const store = createStore(
  RootReducer
  // composeWithDevTools(applyMiddleware(logger))
);
