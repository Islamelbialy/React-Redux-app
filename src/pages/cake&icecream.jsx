import React from "react";
import { buyCake, buyIcecream } from "../component/redux/Action";
import { connect } from "react-redux";

const CakeAndicecream = (probs) => {
  console.log(probs);
  return (
    <div>
      <h1>
        number of {probs.Cake ? "cake" : "icecream"} - {probs.numberOfItems}
      </h1>
      <button onClick={probs.buy}>buy</button>
    </div>
  );
};

const mapProbsOfItem = (state, ownProbs) => {
  return {
    numberOfItems: ownProbs.Cake
      ? state.cake.numberOfcake
      : state.icecream.numberOfIcecream,
  };
};
const mapDispatchOfItem = (dispatch, ownProbs) => {
  return {
    buy: () => {
      ownProbs.Cake ? dispatch(buyCake()) : dispatch(buyIcecream());
    },
  };
};

export default connect(mapProbsOfItem, mapDispatchOfItem)(CakeAndicecream);
