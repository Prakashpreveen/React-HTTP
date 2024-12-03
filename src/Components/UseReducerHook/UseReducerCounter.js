import React, { useReducer } from "react";

const initialCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+5":
      return state + 5;
    case "+":
      return state + 1;
    case "reset":
      return initialCount;
    case "-":
      return state - 1;
    case "-5":
      return state - 5;
  }
};

function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div>
      <h1 style={{ color: "red" }}>COUNTER USING REDUCER</h1>
      <h2 style={{ color: "green" }}>{count}</h2>
      <button onClick={() => dispatch("+5")}>+5</button>
      <button onClick={() => dispatch("+")}>+</button>
      <button onClick={() => dispatch("reset")}>RESET</button>
      <button onClick={() => dispatch("-")}>-</button>
      <button onClick={() => dispatch("-5")}>-5</button>
    </div>
  );
}

export default UseReducerCounter;
