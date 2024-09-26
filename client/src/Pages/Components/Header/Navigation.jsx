import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Navigation() {
	let [theme, setTheme] = useState();

	useEffect(() => {
		let currentTheme = localStorage.getItem("theme") || "light";
		document.body.setAttribute("theme", currentTheme)
		setTheme(currentTheme);
	}, [])

	function toggleTheme() {
		setTheme(theme === "light" ? "dark" : "light");
		localStorage.setItem("theme", theme);
		document.body.setAttribute("theme", theme)
	}

	return (
		<div className="nav-bar">
			<h1 className="logo"><Link to={"/"}>neelog</Link></h1>
			<nav>
				<li className="drop-down">
				<span className="title">
					tutorial
					<FontAwesomeIcon icon="fa-solid fa-caret-down" size="xs" />
				</span>
				<div className="lists-container">
					<ul className="drop-list">
					<li className="title">
						<h2>Frontend</h2>
					</li>
					<li>
						<a href="#"><span className="light-text">learn</span>html</a>
					</li>
					<li>
						<a href="#"><span className="light-text">learn</span>css</a>
					</li>
					<li>
						<a href="#"
						><span className="light-text">learn</span>javascript</a
						>
					</li>
					</ul>
					<ul className="drop-list">
					<li className="title">
						<h2>Frontend</h2>
					</li>
					<li>
						<a href="#"><span className="light-text">learn</span>html</a>
					</li>
					<li>
						<a href="#"><span className="light-text">learn</span>css</a>
					</li>
					<li>
						<a href="#"
						><span className="light-text">learn</span>javascript</a
						>
					</li>
					</ul>
					<ul className="drop-list">
					<li className="title">
						<h2>Frontend</h2>
					</li>
					<li>
						<a href="#"><span className="light-text">learn</span>html</a>
					</li>
					<li>
						<a href="#"><span className="light-text">learn</span>css</a>
					</li>
					<li>
						<a href="#"
						><span className="light-text">learn</span>javascript</a
						>
					</li>
					</ul>
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
			<FontAwesomeIcon onClick={ toggleTheme } id="theme-switch" icon="fa-solid fa-circle-half-stroke" size="lg" />
			</div>
		)
}

export default Navigation;
