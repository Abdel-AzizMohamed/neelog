import { useEffect } from "react";
import setUpIcons from "../Utils/Icons.jsx"
import Landing from "./Components/Landing/Landing.jsx";
import Header from "./Components/Header/Header.jsx";
import "./css/style.css";
import "./css/media.css";
	
function Index() {
	setUpIcons();

	return (
		<>
			<Header></Header>
			<main>
				<Landing />
			</main>
		</>
	)
}

export default Index;
