import { useState, useEffect } from "react";
import styles from "./category.module.css";

function CategoryTable({ tableItems, setTable }) {
  let [currentLevel, setCurrentLevel] = useState(["."]);

  useEffect(() => {
    displayTableItems();
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
        setTable((t) => [...t, value]);
      }
    });
  }

  return (
    <section>
      <div className={styles["categorize-tools"]}>
        <div className={styles["table-tools"]}>
          <select className={styles["table-options"]}>
            <option>bulk actions</option>
            <option>move</option>
            <option>remove</option>
          </select>
          <button className={styles["table-button"]}>apply</button>
        </div>
        <div className={styles["categorize-nav"]}>
          {currentLevel.map((level, index) => {
            return (
              <span
                onClick={() => setCurrentLevel((c) => c.slice(0, index + 1))}
                key={index}
                className={styles["nav-preview"]}
              >
                {level}
              </span>
            );
          })}
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                name="select-all"
                value="0"
                id="select-all"
              />
            </th>
            <th>name</th>
            <th>index</th>
            <th>creation date</th>
            <th>modification date</th>
            <th>category</th>
            <th>tutorial</th>
            <th>section</th>
            <th>children</th>
          </tr>
        </thead>
        <tbody>
          {tableItems.map((data, ind) => {
            let creation_time = new Date(
                data.creation_date["$date"]
              ).toLocaleDateString(),
              modification_date = new Date(
                data.modification_date["$date"]
              ).toLocaleDateString();
            return (
              <tr
                key={ind}
                onDoubleClick={(e) => setCurrentLevel((c) => [...c, data.name])}
              >
                <td>
                  <input type="checkbox" value={ind} />
                </td>
                <td className={styles["ceil-container"]}>
                  <span className={styles["tag-name"]}>{data.name}</span>
                  <span className={styles["tag-delete"]}>delete</span>
                </td>
                <td>{data.index}</td>
                <td>{creation_time}</td>
                <td>{modification_date}</td>
                <td>{data.category}</td>
                <td>{data.tutorial}</td>
                <td>{data.section}</td>
                <td>{data.children}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles["categorize-tools"]}>
        <div className={styles["table-tools"]}>
          <select className={styles["table-options"]}>
            <option>bulk actions</option>
            <option>move</option>
            <option>remove</option>
          </select>
          <button className={styles["table-button"]}>apply</button>
        </div>
        <div className={styles["categorize-nav"]}>
          {currentLevel.map((level, index) => {
            return (
              <span
                onClick={() => setCurrentLevel((c) => c.slice(0, index + 1))}
                key={index}
                className={styles["nav-preview"]}
              >
                {level}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CategoryTable;
