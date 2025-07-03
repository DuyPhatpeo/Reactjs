import { useState, useEffect, useLayoutEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  useLayoutEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrease}>Add</button>
    </div>
  );
}
