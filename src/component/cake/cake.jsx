import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/Action";

const Cake = (probs) => {
  return (
    <div>
      <h1>number of cake - {probs.numberOfCakes}</h1>
      <button onClick={probs.buyCake}>buy cake</button>
    </div>
  );
};
const mapProbsToCake = (state) => {
  return {
    numberOfCakes: state.cake.numberOfcake,
  };
};
const mapDispatchToCake = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    },
  };
};

export default connect(mapProbsToCake, mapDispatchToCake)(Cake);
