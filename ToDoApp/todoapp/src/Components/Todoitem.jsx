import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete button clicked");
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    console.log("item clicked" - { name });
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemname}>
        <span
          className={className}
          onClick={() => {
            handleClick(item.name);
          }}
        >
          {item.name}
        </span>

        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
