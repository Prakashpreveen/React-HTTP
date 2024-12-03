import React, { useReducer } from "react";

import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ComponentC from "./ComponentC";

const CountContext = React.createContext();

//FOR FILE NAME ComponentA,B,C,D,E,F
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "+":
      return state + 1;
    case "reset":
      return initialState;
    case "-":
      return state - 1;
    default:
      return state;
  }
};

function AllComponents() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div>
        Count - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}
export default AllComponents;
export { CountContext };
