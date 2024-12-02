import React, { useState } from "react";

function HookCounterFour() {
  const [Items, SetItems] = useState([]);
  const AddingItem = () => {
    SetItems([
      ...Items,
      {
        id: Items.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <div>
      <button onClick={AddingItem}>Add Item</button>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default HookCounterFour;
