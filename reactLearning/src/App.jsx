import React from "react";
import Happy from "./components/Happy";
import NotHappy from "./components/NotHappy";

function App() {
  const isHappy = true;

  return <div>{isHappy ? <Happy /> : <NotHappy />}</div>;
}

export default App;
