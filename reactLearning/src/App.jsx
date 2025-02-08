import React from "react";

function App() {
  const content1 = <div>This is content 1</div>;
  const content2 = <div>This is content 2</div>;

  const isDisplay1 = true;
  if (isDisplay1) {
    return content1;
  }
  return content2;
}

export default App;
