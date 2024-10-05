import { useEffect, useState } from "react";
import Header from "./Components/Header/Header.jsx";
import CategoryForm from "./Components/Category/CategoryForm.jsx";
import CategoryTable from "./Components/Category/CategoryTable.jsx";
import styles from "./Components/Category/category.module.css";
import "./css/style.css";
import "./css/media.css";

function CreateCategory() {
  let [tableItems, setTable] = useState([]),
    [operation, setOperation] = useState(""),
    [selectedItems, setSelected] = useState([]);

  useEffect(() => {
    let opData = selectedItems.length >= 1 ? operation || "edit" : "";
    setOperation(opData);
  }, [selectedItems.length]);

  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <h1 className={styles["categorize-heading"]}>categorize</h1>
        <div className={styles["categorize-container"]}>
          <CategoryForm
            resetTable={setTable}
            operation={operation}
            selectedItems={selectedItems}
          />
          <CategoryTable
            tableItems={tableItems}
            setTable={setTable}
            selectedItems={selectedItems}
            setSelected={setSelected}
            setOperation={setOperation}
          />
        </div>
      </main>
    </>
  );
}

export default CreateCategory;
