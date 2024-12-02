import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const movementvalue = (e) => {
    console.log("Mouse Movement");

    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("Active EventListener");
    window.addEventListener("mousemove", movementvalue);

    return () => {
      console.log("De-Active EventListener");

      window.removeEventListener("mousemove", movementvalue);
    };
  }, []);

  return (
    <div>
      <h1 style={{ color: "red" }}>HOOK MOUSE EFFECT - RUN ONLY ONCE</h1>
      <h2 style={{ color: "red" }}>
        X : <span style={{ color: "green" }}>{x}</span> Y :{" "}
        <span style={{ color: "green" }}>{y}</span>
      </h2>
    </div>
  );
}

export default HookMouse;
