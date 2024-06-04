import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete button clicked");
    setTodos(todos.filter((todo) => todo !== item));
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>{item}</div>
      <span>
        <button onClick={handleDelete(item)} className={styles.deleteButton}>
          X
        </button>
      </span>
    </div>
  );
}
