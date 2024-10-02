import { useState, useEffect } from "react";
import styles from "./category.module.css";

function CategoryForm({ resetTable, operation, selectedItems }) {
  let [name, setName] = useState("-"),
    [category, setCategory] = useState("-"),
    [tutorial, setTutorial] = useState("-"),
    [categoryItems, setCategoryItems] = useState(["-"]),
    [tutorialItems, setTutorialItems] = useState(["-"]),
    [isRead, setRead] = useState(false);

  useEffect(() => {
    fetchData();
  }, [category, selectedItems.length]);

  useEffect(() => {
    if (selectedItems.length >= 1) {
      setName(selectedItems[0].name);
      setCategory(selectedItems[0].category || "-");
      setTutorial(selectedItems[0].tutorial || "-");
    } else {
      setName("");
      setCategory("-");
      setTutorial("-");
    }
    let readData = selectedItems.length > 1 ? true : false;
    setRead(readData);
  }, [selectedItems.length]);

  function handelForm(e) {
    if (operation === "edit") editData(e);
    else insertData(e);
  }

  async function editData(e) {
    e.preventDefault();
    const fetchSetting = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: selectedItems[0]["_id"]["$oid"],
        name: name,
        category: category,
        tutorial: tutorial,
      }),
    };
    let response = await fetch(
      "http://localhost:5000/api/dashboard/tagging/edit",
      fetchSetting
    );

    console.log("Edited");
    response.json().then((res) => console.log(res));
    fetchData();
    resetTable([]);
  }

  async function insertData(e) {
    e.preventDefault();
    const fetchSetting = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        category: category,
        tutorial: tutorial,
      }),
    };
    let response = await fetch(
      "http://localhost:5000/api/dashboard/tagging/insert",
      fetchSetting
    );

    console.log("Insert");
    response.json().then((res) => console.log(res));
    fetchData();
    resetTable([]);
  }

  async function fetchData() {
    const fetchSetting = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: category,
      }),
    };
    let response = await fetch(
      "http://localhost:5000/api/dashboard/tagging/filter_all",
      fetchSetting
    );

    response.json().then((res) => {
      console.log(res.massage);

      for (const [key, value] of Object.entries(JSON.parse(res.data))) {
        if (key === "categories")
          setCategoryItems(["-", ...value.map((ele) => ele.name)]);
        else if (key === "tutorials")
          setTutorialItems(["-", ...value.map((ele) => ele.name)]);
      }
    });
  }

  return (
    <form action="" method="" onSubmit={handelForm}>
      <h2 className={styles["form-title"]}>Category add</h2>
      <div className={styles["field-group"]}>
        <label>name</label>
        <input
          readOnly={isRead}
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <span>The name is how it appears on your site.</span>
      </div>
      <div className={styles["field-group"]}>
        <label>Category</label>
        <select
          value={category}
          disabled={isRead}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoryItems.map((data) => {
            return <option key={data}>{data}</option>;
          })}
        </select>
        <span>The category that will be added to.</span>
      </div>
      <div className={styles["field-group"]}>
        <label>Tutorial</label>
        <select
          value={tutorial}
          disabled={isRead}
          onChange={(e) => setTutorial(e.target.value)}
        >
          {tutorialItems.map((data) => (
            <option key={data}>{data}</option>
          ))}
        </select>
        <span>The tutorial that will be added to.</span>
      </div>
      <input
        disabled={isRead}
        type="submit"
        name="submit"
        value={operation || "add"}
      />
    </form>
  );
}

export default CategoryForm;
