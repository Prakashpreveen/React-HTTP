import React, { useState, useEffect } from "react";

function EffectHookCounter1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("Effect Hook Rendered!!");
    document.title = `Clicked ${count} Times`;
  }, [count]);
  return (
    <div>
      <input
        placeholder="Name"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Clicked {count} Times</button>
    </div>
  );
}

export default EffectHookCounter1;
