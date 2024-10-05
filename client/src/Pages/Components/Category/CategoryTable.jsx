import { useState, useEffect } from "react";
import styles from "./category.module.css";
import BulkTools from "./CategoryTable/BulkTools";
import TableNavigation from "./CategoryTable/TableNavigation";
import TableHeader from "./CategoryTable/TableHeader";
import TableBody from "./CategoryTable/TableBody";

function CategoryTable({
  tableItems,
  setTable,
  selectedItems,
  setSelected,
  setOperation,
}) {
  let [currentLevel, setCurrentLevel] = useState(["."]);

  useEffect(() => {
    displayTableItems();
    setSelected([]);
  }, [tableItems.length, currentLevel]);

  async function displayTableItems() {
    const fetchSetting = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ levels: currentLevel }),
      signal: AbortSignal.timeout(5000),
    };
    const response = await fetch(
      "http://localhost:5000/api/dashboard/tagging/filter_one",
      fetchSetting
    );

    response.json().then((data) => {
      setTable([]);
      for (const [key, value] of Object.entries(JSON.parse(data.data))) {
        value.class = "";
        setTable((t) => [...t, value]);
      }
    });
  }

  return (
    <section>
      <div className={styles["categorize-tools"]}>
        <BulkTools />
        <TableNavigation
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
      </div>
      <table>
        <TableHeader />
        <TableBody
          tableItems={tableItems}
          selectedItems={selectedItems}
          setSelected={setSelected}
          setCurrentLevel={setCurrentLevel}
          setOperation={setOperation}
        />
      </table>
      <div className={styles["categorize-tools"]}>
        <BulkTools />
        <TableNavigation
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
      </div>
    </section>
  );
}

export default CategoryTable;
