import { Outlet } from "react-router-dom";
import '../../assets/styles/Layout.css';  // On importe les styles CSS spécifiques pour le layout
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
     <Header /> 
      <div className="content">
        <Outlet />  
      </div>
      <Footer /> 
    </>
  );
};

export default Layout;
