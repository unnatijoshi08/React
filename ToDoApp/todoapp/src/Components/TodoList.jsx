import Todoitem from "./Todoitem";
import styles from "./todoList.module.css";
export default function TodoList({ todos, setTodos }) {
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));
  const length = sortedTodos.length;
  return length === 0 ? (
    <div className={styles.noList}>
      <h2>Hey, your todo list seems empty....</h2>
    </div>
  ) : (
    <div className={styles.list}>
      {sortedTodos.map((item) => (
        <Todoitem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
