import React, { useReducer } from "react";

const InitialCount = {
  firstCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "+":
      return { firstCount: state.firstCount + action.value };
    case "reset":
      return { firstCount: InitialCount.firstCount };
    case "-":
      return { firstCount: state.firstCount - action.value };
    default:
      return state;
  }
};
function UseReducerCounterObject() {
  const [count, dispatch] = useReducer(reducer, InitialCount);
  return (
    <>
      <h1 style={{ color: "red" }}>COUNTER USING USEREDUCER WITH OBJECT</h1>
      <h2>{count.firstCount}</h2>
      <button onClick={() => dispatch({ type: "+", value: 5 })}>+5</button>
      <button onClick={() => dispatch({ type: "+", value: 1 })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>RESET</button>
      <button onClick={() => dispatch({ type: "-", value: 1 })}>-</button>
      <button onClick={() => dispatch({ type: "+", value: 5 })}>-5</button>
    </>
  );
}
export default UseReducerCounterObject;
