import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyIcecream } from "../redux/Action";

const IcecreamHook = (probs) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of icecream - {state.icecream.numberOfIcecream}</h1>
      <button onClick={() => dispatch(buyIcecream())}>buy icecream</button>
    </div>
  );
};

export default IcecreamHook;
