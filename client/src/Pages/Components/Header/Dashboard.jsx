import { Link } from "react-router-dom";

function Dashboard() {
	return (
	  <ul className="dashboard">
			<li>
				<Link to={'/createCategory'}>create category</Link>
			</li>
			<li>
					<Link to={'/createCategory'}>create article</Link>
			</li>
	  </ul>
	)
}

export default Dashboard;
