import Landing from "./Components/Landing/Landing.jsx";
import Header from "./Components/Header/Header.jsx";
import "./css/style.css";
import "./css/media.css";

function Index() {
  return (
    <>
      <Header></Header>
      <main>
        <Landing />
      </main>
    </>
  );
}

export default Index;
