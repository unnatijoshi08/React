import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodo(e.target.value);
    setTodos([...todos, todo]);
    setTodo("");
    console.log(todos);
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div style={{ display: "flex" }}>
        {" "}
        <input
          className={styles.modernInput}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
          value={todo}
          placeholder="Enter todo item here..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
