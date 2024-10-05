import SelectField from "./ArticleSide/SelectField";
import styles from "./article.module.css";

function ArticleSide() {
  return (
    <form action="" method="POST" className={styles["article-side"]}>
      <h2 className={styles["publish-title"]}>publish</h2>
      <SelectField />
      <SelectField />
      <SelectField />
      <input type="submit" value="publish" />
    </form>
  );
}

export default ArticleSide;
