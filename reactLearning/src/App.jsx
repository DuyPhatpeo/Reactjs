import React, { useState } from "react";

function App() {
  const handleInitialState = () => {
    return 1 + 1 + 1;
  };

  console.log(handleInitialState());

  const [count, setCount] = useState(handleInitialState());

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>Sử dụng useState trong reactJS</div>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
