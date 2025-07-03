import React, { useEffect, useState } from "react";
import Counter from "./components/Count";
function App() {
  const [show, setShow] = useState(0);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Counter />}
    </div>
  );
}

export default App;
