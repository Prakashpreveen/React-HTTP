import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 style={{ color: "red" }}>NORMAL FUNCTIONAL COUNTER</h2>
      <button onClick={() => setCount(count + 1)}>Click {count}</button>
    </div>
  );
}

export default HookCounter;
