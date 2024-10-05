import Header from "./Components/Header/Header";
import ArticleForm from "./Components/CreateArticle/ArticleForm";
import ArticleSide from "./Components/CreateArticle/ArticleSide";
import styles from "./Components/CreateArticle/article.module.css";

function CreateArticle() {
  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <h1 className={styles["form-heading"]}>create new article</h1>
        <div className={styles["form-container"]}>
          <ArticleForm />
          <ArticleSide />
        </div>
      </main>
    </>
  );
}

export default CreateArticle;
