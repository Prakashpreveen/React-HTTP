import React, { useContext } from "react";
import { CountContext } from "./AllComponents";
import ComponentE from "./ComponentE";

function ComponentF() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <h3>Componenet F</h3>
      <button onClick={() => countContext.countDispatch("+")}>+</button>
      <button onClick={() => countContext.countDispatch("reset")}>RESET</button>
      <button onClick={() => countContext.countDispatch("-")}>-</button>
    </div>
  );
}

export default ComponentF;
