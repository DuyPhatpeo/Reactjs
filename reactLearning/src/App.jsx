import React, { useState } from "react";

function App() {
  const [userName, setUsername] = useState();
  const handleGetUsername = (e) => {
    setUsername(e.target.value);
  };
  console.log(userName);
  return (
    <>
      <div>
        <input type="text" onChange={(e) => handleGetUsername(e)} />
      </div>
    </>
  );
}

export default App;
