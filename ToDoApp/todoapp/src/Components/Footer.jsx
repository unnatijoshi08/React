import styles from "./footer.module.css";
export default function Footer({ completedItems, totalItems }) {
  return (
    <div className={styles.footer}>
      {" "}
      <span className={styles.item}>Completed Todos:{completedItems}</span>
      <span className={styles.item}>Total Todos: {totalItems}</span>
    </div>
  );
}
