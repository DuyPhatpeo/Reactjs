import React, { useState } from "react";

function App() {
  const [todo, setTodo] = useState({ id: "", name: "" });
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Đánh răng rửa mặt" },
  ]);

  const handleGetToto = (value) => {
    setTodo((prev) => ({
      ...prev,
      id: prev.id || Math.floor(Math.random() * 100000), // Chỉ tạo id khi cần
      name: value,
    }));
  };

  const handleSubmit = () => {
    if (!todo.name.trim()) return;

    setTodoList((prev) => [...prev, todo]);
    setTodo({ id: "", name: "" }); // Reset input
  };

  const handleDeleteTodo = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(e) => handleGetToto(e.target.value)}
          value={todo.name}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>

      <ul>
        {todoList.map((todo) => (
          <div style={{ display: "flex", gap: "30px" }} key={todo.id}>
            <li>{todo.name}</li>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              x
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
