import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/Action";

const CakeHook = (probs) => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfcake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>number of cake - {numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>buy cake</button>
    </div>
  );
};
export default CakeHook;
