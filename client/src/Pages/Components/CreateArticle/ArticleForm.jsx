import { useState } from "react";
import TextField from "./ArticleForm/TextField";
import AddMedia from "./ArticleForm/AddMedia";
import SwitchView from "./ArticleForm/SwitchView";
import ToolBox from "./ArticleForm/ToolBox";
import AreaField from "./ArticleForm/AreaField";
import styles from "./article.module.css";

function ArticleForm() {
  let [title, setTitle] = useState("");

  console.log(title);

  return (
    <div className={styles["article-form"]}>
      <h2 className={styles["form-title"]}>Create a new post</h2>
      <TextField setTitle={setTitle} />
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
