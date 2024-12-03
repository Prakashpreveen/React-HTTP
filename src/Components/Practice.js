import React, { useState } from "react";

function Practice() {
  const [State, SetState] = useState({
    count: 0,
    message: "Hello World",
  });
  const ClickHandler = () => {
    SetState((prevState) => ({ ...prevState, count: prevState.count + 1 }));
  };
  return (
    <div>
      <p>{State.message}</p>
      <p>Count: {State.count}</p>
      <button onClick={ClickHandler}>Submit</button>
    </div>
  );
}
export default Practice;
