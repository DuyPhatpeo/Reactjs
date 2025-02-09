import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  console.log("re-render");

  return (
    <>
      <div>Sử dụng useState trong reactJS</div>
      <div>Count: {count}</div>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
