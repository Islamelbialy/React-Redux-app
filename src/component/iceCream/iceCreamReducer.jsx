import { BUY_ICECREAM } from "../redux/actionTypes";
import { initState } from "../redux/rootReducer";

export const icecreamReducer = (state = initState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { numberOfIcecream: state.numberOfIcecream - 1 };
    default:
      return state;
  }
};
