import { Link } from "react-router-dom";
import '../../assets/styles/Header.css'; 
import ButtonComponent from "../../components/common/ButtonComponent.tsx";


const Header = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
        <p  className="logo_header">Fabulous</p>
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="login"><ButtonComponent className="button_login" value="Login"/></Link>
          </li>
          <li>
            <Link to="signup"><ButtonComponent className="button_signup" value="Sign up"/></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
