import { Outlet, Link } from "react-router-dom";
import '../../assets/styles/Layout.css';  // On importe les styles CSS spécifiques pour le layout
import fabulousLogo from "/fabulous.png";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={fabulousLogo} className="logo_header" alt="Fabulous logo" />
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />  {/* C'est ici que les sous-routes vont être rendues */}
      </div>
    </>
  );
};

export default Layout;
