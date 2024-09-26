import { Link } from "react-router-dom";
import "./css/error.css";


function ErrorNotFound() {
	return (
		<>
			<main className="error-container">
				<h1>Sorry! We can't seem to find the resource you're looking for.</h1>
				<p>Please check that the Web site address is spelled correctly.
Or go to our <Link to="/">home page</Link>, and use the menus to navigate to a specific section.</p>
			</main>
		</>
	)
}


export default ErrorNotFound;
