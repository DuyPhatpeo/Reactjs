import React from "react";
import Category from "./components/Category";
import NotCategory from "./components/NotCategory";

function App() {
  const isRenderCategory = false;
  if (isRenderCategory) {
    return <Category />;
  } else {
    return <NotCategory />;
  }
}

export default App;
