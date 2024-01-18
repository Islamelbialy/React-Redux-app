import { BUY_CAKE } from "../redux/actionTypes";
import { initState } from "../redux/rootReducer";

export const cakeReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { numberOfcake: state.numberOfcake - 1 };
    default:
      return state;
  }
};
