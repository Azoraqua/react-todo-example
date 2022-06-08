import React, { useState } from "react";
import { Container } from "@mui/material";
import { TodoForm, TodoList } from "./components";

import "./App.css";

function App() {
  const [
    todos,
    setTodos,
    addTodo = (name) => setTodos(prev => [...prev, { name, done: false }]),
    removeTodo = (name) => setTodos(prev => prev.filter(todo => todo.name !== name)),
    toggleTodo = (name) => setTodos((prev) => prev.map((todo) => todo.name === name ? { name, done: !todo.done } : todo))
  ] = useState([]);

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "2em", mt: "2em" }}>
      <TodoForm todos={todos} onSubmit={(name) => addTodo(name)} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </Container>
  );
}

export default App;
