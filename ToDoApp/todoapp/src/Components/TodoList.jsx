import Todoitem from "./Todoitem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  return (
    <div className={styles.list}>
      {todos.map((item) => (
        <Todoitem key={item} item={item} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
