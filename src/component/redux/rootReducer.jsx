import { combineReducers } from "redux";
import { cakeReducer } from "../cake/cakeReducer";
import { icecreamReducer } from "../iceCream/iceCreamReducer";

export const initState = {
  numberOfcake: 10,
  numberOfIcecream: 20,
};

export const RootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});
