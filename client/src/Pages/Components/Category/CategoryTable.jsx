import { useState, useEffect } from "react";
import styles from "./category.module.css";


function CategoryTable() {
	// let categories = {"frontend": ["html", "css"]},
	// 	tutorials = {"html": ["html forms", "html text"], "css": ["animtion", "media quires"]},
	// 	sections = {"html forms": ["text input", "email input"], "html text": ["paragrahp", "headings"], "animtion": ["basics"]};
	let [tableItems, setTable] = useState([]),
		[currentLevel, setCurrentLevel] = useState([".", "frontend"]);

	//useEffect(() => { 
	//	displayTableItems()
	//}, []);
	
	//async function displayTableItems() {
	//	let lvlLen = currentLevel.length,
	//		response = await fetch("http://localhost:9090/api/dashboard/category/get");
	//
	//	response.json().then(data => data.map((ele, ind) => {
	//		return (
	//			<tr key={ind}>
	//				<td><input type="checkbox" value={ind} /></td>
	//				<td>{ele.name}</td>
	//				<td>{ele.index}</td>
	//				<td>{ele.creation_time}</td>
	//				<td>{ele.modifcation_time}</td>
	//				<td>{ele.cateogry}</td>
	//				<td>{ele.tutorial}</td>
	//				<td>{ele.section}</td>
	//				<td>{ele.children}</td>
	//			</tr>
	//		)
	//	})).then((elements) => {
	//		setTable(elements);
	//	})
	//}

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
						return <span key={index} className={styles["nav-preview"]}>{level}</span>
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
					{ tableItems }
          <tr>
            <td><input type="checkbox" name="edit" value="1" /></td>
            <td>input element</td>
            <td>1</td>
            <td>1920/10/11</td>
            <td>2024/11/11</td>
            <td>front end</td>
            <td>html</td>
            <td>html forms</td>
            <td>0</td>
          </tr>
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
          <span className={styles["nav-preview"]}>.</span>
          <span className={styles["nav-preview"]}>frontend</span>
          <span className={styles["nav-preview"]}>html</span>
          <span className={styles["nav-preview"]}>html forms</span>
        </div>
      </div>
    </section>
	);
}

export default CategoryTable;
