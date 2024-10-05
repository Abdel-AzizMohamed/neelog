import { useState, useEffect } from "react";
import styles from "./category.module.css";
import TextField from "./CategoryForm/TextField";
import SelectField from "./CategoryForm/SelectField";

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
    let readData =
      selectedItems.length > 1 || operation === "delete" ? true : false;
    setRead(readData);
  }, [selectedItems.length]);

  function handelForm(e) {
    if (operation === "edit") editData(e);
    else if (operation === "delete") deleteData(e);
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

  async function deleteData(e) {
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
      "http://localhost:5000/api/dashboard/tagging/delete_one",
      fetchSetting
    );

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
      <TextField isRead={isRead} name={name} setName={setName} />
      <SelectField
        taggingName={"category"}
        tagging={category}
        setTagging={setCategory}
        isRead={isRead}
        taggingItems={categoryItems}
      />

      <SelectField
        taggingName={"tutorial"}
        tagging={tutorial}
        setTagging={setTutorial}
        isRead={isRead}
        taggingItems={tutorialItems}
      />

      <input
        disabled={operation === "delete" ? false : isRead}
        type="submit"
        name="submit"
        value={operation || "add"}
      />
    </form>
  );
}

export default CategoryForm;
