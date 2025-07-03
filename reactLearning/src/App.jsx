import React, { useEffect, useState } from "react";
import { use } from "react";
import Timer from "./components/Timer";
function App() {
  const [show, setShow] = useState(0);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Show</button>
      {show && <Timer />}
    </div>
  );
}

export default App;
