import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';      // Styles spécifiques à l'application
import Layout from "./components/layout/Layout.tsx";
import Login from "./pages/login.tsx";
import Home from "./pages/home.tsx";

export default function Fabulous() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}