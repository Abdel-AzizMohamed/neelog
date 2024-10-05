import { useState } from "react";
import TextField from "./ArticleForm/TextField";
import AddMedia from "./ArticleForm/AddMedia";
import SwitchView from "./ArticleForm/SwitchView";
import ToolBox from "./ArticleForm/ToolBox";
import AreaField from "./ArticleForm/AreaField";
import styles from "./article.module.css";

function ArticleForm() {
  let [title, setTitle] = useState(""),
    [view, setView] = useState("markdown");

  console.log(view);

  return (
    <div className={styles["article-form"]}>
      <h2 className={styles["form-title"]}>Create a new post</h2>
      <TextField setTitle={setTitle} />
      <div className={styles["article-tools-container"]}>
        <AddMedia />
        <SwitchView view={view} setView={setView} />
      </div>
      <ToolBox />
      <AreaField view={view} />
      <div className={styles[view === "preview" ? "preview" : "hidden"]}></div>
    </div>
  );
}

export default ArticleForm;
