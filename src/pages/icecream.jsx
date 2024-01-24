import React from "react";
import { connect } from "react-redux";
import { buyIcecream } from "../component/redux/Action";

const Icecream = (probs) => {
  return (
    <div>
      <h1>number of icecream - {probs.numberOfIceCream}</h1>
      <button onClick={probs.buyIcecream}>buy icecream</button>
    </div>
  );
};

const mapProbsOfIcecream = (state) => {
  return {
    numberOfIceCream: state.icecream.numberOfIcecream,
  };
};
const mapDispatchOfIcecream = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};
export default connect(mapProbsOfIcecream, mapDispatchOfIcecream)(Icecream);
