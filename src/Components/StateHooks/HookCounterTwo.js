import React, { Component, useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, SetCount] = useState(initialCount);

  const IncrementFive = () => {
    SetCount((prevState) => prevState + 5);
  };
  const DecrementFive = () => {
    SetCount((prevState) => (prevState >= 5 ? prevState - 5 : initialCount));
  };
  return (
    <>
      <h2 style={{ color: "red" }}>HOOK COUNTER USING PREVSTATE</h2>
      <h1> Count : {count}</h1>
      <button onClick={IncrementFive}>+5</button>
      <button onClick={() => SetCount((prevState) => prevState + 1)}>+</button>
      <button onClick={() => SetCount(initialCount)}>RESET</button>
      <button
        onClick={() =>
          SetCount((prevState) =>
            prevState >= 1 ? prevState - 1 : initialCount
          )
        }
      >
        -
      </button>
      <button onClick={DecrementFive}>-5</button>
    </>
  );
}
export default HookCounterTwo;
