import styles from "../category.module.css";

function BulkTools() {
  return (
    <div className={styles["table-tools"]}>
      <select className={styles["table-options"]}>
        <option>bulk actions</option>
        <option>move</option>
        <option>remove</option>
      </select>
      <button className={styles["table-button"]}>apply</button>
    </div>
  );
}

export default BulkTools;
