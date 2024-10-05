import styles from "../category.module.css";

function TextField({ isRead, name, setName }) {
  return (
    <div className={styles["field-group"]}>
      <label>name</label>
      <input
        readOnly={isRead}
        type="text"
        name="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <span>The name is how it appears on your site.</span>
    </div>
  );
}

export default TextField;
