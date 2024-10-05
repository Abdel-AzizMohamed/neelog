import Dashboard from "./Dashboard.jsx";
import Navigation from "./Navigation.jsx";
import QuickAccess from "./QuickAccess.jsx";

function Header() {
  return (
    <header>
      <Dashboard />
      <Navigation />
      <QuickAccess />
    </header>
  );
}

export default Header;
