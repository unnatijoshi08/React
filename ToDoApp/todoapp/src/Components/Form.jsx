import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodo({ name: e.target.value, done: false });
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
    console.log(todos);
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
        {" "}
        <input
          className={styles.modernInput}
          onChange={(e) => {
            setTodo({ name: e.target.value, done: false });
          }}
          type="text"
          value={todo.name}
          placeholder="Enter todo item here..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
