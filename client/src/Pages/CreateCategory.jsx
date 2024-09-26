import Header from "./Components/Header/Header.jsx";
import CategoryForm from "./Components/Category/CategoryForm.jsx";
import CategoryTable from "./Components/Category/CategoryTable.jsx";
import setUpIcons from "../Utils/Icons.jsx";
import styles from "./Components/Category/category.module.css";
import "./css/style.css";
import "./css/media.css";

function CreateCategory() {
  setUpIcons();

  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <h1 className={styles["categorize-heading"]}>categorize</h1>
        <div className={styles["categorize-container"]}>
          <CategoryForm />
          <CategoryTable />
        </div>
      </main>
    </>
  );
}

export default CreateCategory;
