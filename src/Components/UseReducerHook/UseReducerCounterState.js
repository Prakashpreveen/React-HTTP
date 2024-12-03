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

function UseReducerCounterState() {
  const [count, dispatch] = useReducer(reducer, InitialCount);
  return (
    <div>
      <h1 style={{ color: "red" }}>COUNTER USING USEREDUCER</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch("+")}>+</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
      <button onClick={() => dispatch("-")}>-</button>
    </div>
  );
}

export default UseReducerCounterState;
