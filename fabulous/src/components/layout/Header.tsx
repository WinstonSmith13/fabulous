import { Outlet, Link } from "react-router-dom";
import '../../assets/styles/Layout.css';  // On importe les styles CSS spécifiques pour le layout
import fabulousLogo from "/Content.png";
import ButtonComponent from "../common/ButtonComponent.tsx";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
        <p  className="logo_header">Fabulous</p>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/"><ButtonComponent className="button_login" value="Login"/></Link>
          </li>
          <li>
          <Link to="/"><ButtonComponent className="button_signup" value="Sign up"/></Link>
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
