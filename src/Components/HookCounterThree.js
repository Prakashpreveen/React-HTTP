import React, { useState } from "react";

function HookCounterThree() {
  const [name, SetName] = useState({ firstname: "", lastname: "" });

  return (
    <div>
      <>
        <form>
          <input
            placeholder="FirstName"
            name="name"
            value={name.firstname}
            onChange={(e) => SetName({ firstname: e.target.value })}
          />
          <input
            placeholder="LastName"
            name="name"
            value={name.lastname}
            onChange={(e) => SetName({ lastname: e.target.value })}
          />
          <h2>My First Name is {name.firstname}</h2>
          <h2>My Last Name is {name.lastname}</h2>
        </form>
      </>
    </div>
  );
}

export default HookCounterThree;
