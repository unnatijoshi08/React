import { useState } from "react";
import Todoitem from "./Todoitem";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedItems = todos.filter((todo) => todo.done).length;
  const totalItems = todos.length;
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <br></br>
      <TodoList todos={todos} setTodos={setTodos} />
      <Footer completedItems={completedItems} totalItems={totalItems} />
    </div>
  );
}
