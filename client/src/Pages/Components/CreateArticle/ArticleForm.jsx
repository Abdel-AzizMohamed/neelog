import TextField from "./ArticleForm/TextField";
import AddMedia from "./ArticleForm/AddMedia";
import SwitchView from "./ArticleForm/SwitchView";
import ToolBox from "./ArticleForm/ToolBox";
import AreaField from "./ArticleForm/AreaField";

function ArticleForm() {
  return (
    <>
      <TextField />
      <div className="article-tools-container">
        <AddMedia />
        <SwitchView />
      </div>
      <ToolBox />
      <AreaField />
    </>
  );
}

export default ArticleForm;
