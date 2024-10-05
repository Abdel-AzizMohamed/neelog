import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../article.module.css";

function AddMedia() {
  return (
    <div className={styles["media-container"]}>
      <FontAwesomeIcon icon="image" />
      <span className="media-text">add media</span>
    </div>
  );
}

export default AddMedia;
