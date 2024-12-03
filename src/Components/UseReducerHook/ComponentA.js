import React, { useContext } from "react";
import { CountContext } from "./AllComponents";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h3>Componenet A</h3>
      <button onClick={() => countContext.countDispatch("+")}>+</button>
      <button onClick={() => countContext.countDispatch("reset")}>RESET</button>
      <button onClick={() => countContext.countDispatch("-")}>-</button>
    </div>
  );
}

export default ComponentA;
