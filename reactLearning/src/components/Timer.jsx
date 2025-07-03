import React, { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);

      console.log("chay lai");
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>{count}</div>;
}
export default Timer;
