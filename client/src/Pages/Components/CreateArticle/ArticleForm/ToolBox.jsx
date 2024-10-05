import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../article.module.css";

function ToolBox() {
  return (
    <ul className={styles["tool-box"]}>
      <li>
        <FontAwesomeIcon icon="bold" />
      </li>
      <li>
        <FontAwesomeIcon icon="italic" />
      </li>
      <li>
        <FontAwesomeIcon icon="list-dots" />
      </li>
    </ul>
  );
}

export default ToolBox;
