import { useEffect, useState } from "react";

async function fetchCategories() {
  const fetchSetting = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      levels: ["."],
    }),
  };
  let response = await fetch(
    "http://localhost:5000/api/dashboard/tagging/filter_one",
    fetchSetting
  );

  return response.json();
}

function QuickAccess() {
  let [categories, setCategories] = useState([]);

  useEffect(() => {
    let jsonData = fetchCategories();
    jsonData.then((response) => {
      for (const [key, value] of Object.entries(JSON.parse(response.data))) {
        setCategories((c) => [...c, value.name]);
      }
    });
  }, []);

  return (
    <ul className="quick-access">
      {categories.map((name, ind) => {
        return (
          <li key={ind}>
            <a href="#">{name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default QuickAccess;
