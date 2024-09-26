import { useState, useEffect } from "react";
import styles from "./category.module.css";

function CategoryForm() {
  let [name, setName] = useState("-"),
    [category, setCategory] = useState("-"),
    [categoryItems, setCategoryItems] = useState(["-"]),
    [tutorial, setTutorial] = useState("-"),
    [tutorialItems, setTutorialItems] = useState(["-"]);

  useEffect(() => fetchData(), [category]);

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
    let response = await fetch("http://localhost:9090/api/dashboard/category/insert", fetchSetting);

    response.json().then((res) => console.log(res));
  }

  async function fetchData() {
    const fetchSetting = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: category,
      }),
    };
    let response = await fetch("http://localhost:9090/api/dashboard/category/get", fetchSetting);

    response.json().then(res => {
      console.log(res.massage);

      for (const [key, value] of Object.entries(JSON.parse(res.data))) {
        if (key === "categories")
          setCategoryItems(["-", ...value.map(ele => ele.name)]);
        else if (key === "tutorials")
          setTutorialItems(["-", ...value.map(ele => ele.name)]);
      }
    })
  }

  return (
    <form action="" method="" onSubmit={() => 
      {
        insertData()
        fetchData()
      }
    }>
      <h2 className={styles["form-title"]}>Category add</h2>
      <div className={styles["field-group"]}>
        <label>name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <span>The name is how it appears on your site.</span>
      </div>
      <div className={styles["field-group"]}>
        <label>Category</label>
        <select onChange={e => setCategory(e.target.value)}>
          {categoryItems.map(data => <option key={data}>{data}</option>)}
        </select>
        <span>The category that will be added to.</span>
      </div>
      <div className={styles["field-group"]}>
        <label>Tutorial</label>
        <select onChange={e => setTutorial(e.target.value)}>
          {tutorialItems.map(data => <option key={data}>{data}</option>)}
        </select>
        <span>The tutorial that will be added to.</span>
      </div>
      <input type="submit" name="submit" value="Add" />
    </form>
  );
}

export default CategoryForm;
