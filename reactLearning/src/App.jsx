import React, { useEffect, useState } from "react";
import { use } from "react";

function App() {
  const [count, setCount] = useState(1);

  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   // fetch("https://jsonplaceholder.typicode.com/posts")
  //   //   .then((response) => response.json())
  //   //   .then((json) => {
  //   //     setPosts(json);
  //   //   });
  // });

  // useEffect callback, []) nó chỉ chạy 1 lần khi component mount

  useEffect(() => {
    console.log("re-render");
  }, []);
  return (
    <div>
      <h1>Counter: {count}</h1>
      {console.log("render JSX")}
      <button onClick={() => setCount(count + 1)}>Click me</button>

      {posts.map((post, index) => (
        <div key={index}>{post.title}</div>
      ))}
    </div>
  );
}

export default App;
