import React, { useReducer } from "react";

const InitialCount = 0;

const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "reset":
      return InitialCount;
    case "-":
      return state - 1;
    default:
      return state;
  }
};

function UseReducerCounterMultipleTimes() {
  const [count, dispatch] = useReducer(reducer, InitialCount);
  const [countTwo, dispatchTwo] = useReducer(reducer, InitialCount);
  return (
    <div>
      <h1 style={{ color: "red" }}>COUNTER USING USEREDUCER</h1>
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch("+")}>+</button>
        <button onClick={() => dispatch("reset")}>RESET</button>
        <button onClick={() => dispatch("-")}>-</button>
      </div>
      <div>
        <h2>{countTwo}</h2>
        <button onClick={() => dispatchTwo("+")}>+</button>
        <button onClick={() => dispatchTwo("reset")}>RESET</button>
        <button onClick={() => dispatchTwo("-")}>-</button>
      </div>
    </div>
  );
}

export default UseReducerCounterMultipleTimes;
