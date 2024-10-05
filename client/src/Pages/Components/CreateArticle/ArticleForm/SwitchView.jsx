import styles from "../article.module.css";

function SwitchView({ view, setView }) {
  return (
    <ul className={styles["switch-container"]}>
      <li
        className={styles[view === "markdown" ? "active" : ""]}
        onClick={() => setView("markdown")}
      >
        markdown
      </li>
      <li
        className={styles[view === "preview" ? "active" : ""]}
        onClick={() => setView("preview")}
      >
        preview
      </li>
    </ul>
  );
}

export default SwitchView;
