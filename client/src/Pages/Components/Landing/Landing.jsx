import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Landing() {

	return (
	  <section className="landing">
		<h1 className="landing-heading">Neelog</h1>
		<p className="landing-text">
		  neelog is a platform to learn code in depth every aspect of computer
		  science.
		</p>
		<form action="" method="GET">
		  <input type="text" placeholder="Search..." />
		  <button>
			<FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="xs" />
		  </button>
		</form>
	  </section>
	)
}

export default Landing;
