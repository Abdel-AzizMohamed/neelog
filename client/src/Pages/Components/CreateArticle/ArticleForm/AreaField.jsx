import styles from "../article.module.css";

function AreaField({ view }) {
  return (
    <textarea
      className={styles[view === "markdown" ? "" : "hidden"]}
    ></textarea>
  );
}

export default AreaField;
