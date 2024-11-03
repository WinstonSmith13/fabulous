import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';      // Styles spécifiques à l'application
import Layout from "./components/layout/Layout.tsx";
import Login from "./pages/login.tsx";
import Signup from "./pages/signup.tsx";
import Home from "./pages/home.tsx";
import Results from "./pages/results.tsx";




export default function Fabulous() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="results" element={<Results/>} />
        </Route>
      </Routes>
    </Router>
  );
}