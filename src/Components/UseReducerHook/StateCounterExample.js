import React, { useState } from "react";

function StateCounterExample() {
  const [count, Setcount] = useState(0);
  return (
    <div>
      <h1 style={{ color: "red" }}>COUNTER USING USESTATE</h1>
      <h2>{count}</h2>
      <button onClick={() => Setcount((prevState) => prevState + 1)}>+</button>
      <button onClick={() => Setcount(0)}>RESET</button>
      <button onClick={() => Setcount((prevState) => prevState - 1)}>-</button>
    </div>
  );
}

export default StateCounterExample;
