import React, { useState } from "react";

function StateCounterExample() {
  const [count, Setcount] = useState(0);
  return (
    <div>
      <h1 style={{ color: "red" }}>COUNTER USING STATE</h1>
      <h2 style={{ color: "green" }}>{count}</h2>
      <button onClick={() => Setcount((prevState) => prevState + 5)}>+5</button>
      <button onClick={() => Setcount((prevState) => prevState + 1)}>+</button>
      <button onClick={() => Setcount(0)}>RESET</button>
      <button onClick={() => Setcount((prevState) => prevState - 1)}>-</button>
      <button onClick={() => Setcount((prevState) => prevState - 5)}>-5</button>
    </div>
  );
}

export default StateCounterExample;
