import styles from "../article.module.css";

function SwitchView() {
  return (
    <ul className={styles["switch-container"]}>
      <li>markdown</li>
      <li>preview</li>
    </ul>
  );
}

export default SwitchView;
