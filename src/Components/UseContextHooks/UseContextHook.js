// export default Practice;
import React, { createContext, useContext } from "react";

// Create a context
const MyContext = createContext("default value");

const ExampleComponent = () => {
  // Access context value
  const contextValue = useContext(MyContext);
  return <h1>{contextValue}</h1>;
};

const ParentComponent = () => {
  return (
    <MyContext.Provider value="Hello from Context!">
      <ExampleComponent />
    </MyContext.Provider>
  );
};
export default ParentComponent;
