import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

async function fetchSiblings() {
  let response = await fetch(
    "http://localhost:5000/api/dashboard/tagging/filter_siblings"
  );

  return response.json();
}

async function fetchParents() {
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

function Navigation() {
  let [theme, setTheme] = useState(),
    [isDrop, setDrop] = useState(false),
    [parents, setParents] = useState([]),
    [siblings, setSiblings] = useState({});

  useEffect(() => {
    let currentTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("theme", currentTheme);
    setTheme(currentTheme);
    fetchData();
  }, []);

  async function fetchData() {
    let parentsResponse = await fetchParents(),
      siblingsResponse = await fetchSiblings();

    setParents([]);
    for (const [_, value] of Object.entries(JSON.parse(parentsResponse.data))) {
      setParents((p) => [...p, value.name]);
    }

    setSiblings(JSON.parse(siblingsResponse.data));
  }

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme);
    document.body.setAttribute("theme", theme);
  }

  return (
    <div className="nav-bar">
      <h1 className="logo">
        <Link to={"/"}>neelog</Link>
      </h1>
      <nav>
        <li onClick={() => setDrop((d) => !d)} className="drop-down">
          <span className="title">
            tutorial
            <FontAwesomeIcon icon="fa-solid fa-caret-down" size="xs" />
          </span>
          <div className={(isDrop ? "" : "hidden ") + "lists-container"}>
            {parents.map((name, index) => {
              return (
                <ul key={name} className="drop-list">
                  <li key={`${name}-${index}`} className="title">
                    <h2>{name}</h2>
                  </li>
                  {siblings[name].map((sibling) => {
                    return (
                      <li key={`${name}-${sibling}`}>
                        <a href="#">
                          <span className="light-text">learn</span>{" "}
                          {sibling.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </nav>
      <div className="field-group">
        <input id="search" type="text" placeholder="Search..." />
        <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="lg" />
      </div>
      <FontAwesomeIcon
        onClick={toggleTheme}
        id="theme-switch"
        icon="fa-solid fa-circle-half-stroke"
        size="lg"
      />
    </div>
  );
}

export default Navigation;
