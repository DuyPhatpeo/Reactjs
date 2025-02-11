import React, { useState } from "react";
import Content from "./components/Content";

function App() {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div>
        <button onClick={handleShow}>Show</button>
        {show && <Content />}
      </div>
    </>
  );
}
export default App;
