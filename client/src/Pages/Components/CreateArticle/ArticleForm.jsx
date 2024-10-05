import TextField from "./ArticleForm/TextField";
import AddMedia from "./ArticleForm/AddMedia";
import SwitchView from "./ArticleForm/SwitchView";
import ToolBox from "./ArticleForm/ToolBox";
import AreaField from "./ArticleForm/AreaField";
import styles from "./article.module.css";

function ArticleForm() {
  return (
    <div className={styles["article-form"]}>
      <h2 className={styles["form-title"]}>Create a new post</h2>
      <TextField />
      <div className={styles["article-tools-container"]}>
        <AddMedia />
        <SwitchView />
      </div>
      <ToolBox />
      <AreaField />
    </div>
  );
}

export default ArticleForm;
