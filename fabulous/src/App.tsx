import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';      // Styles spécifiques à l'application
import Layout from "./components/layout/Header.tsx";
import Test from "./pages/test.tsx";
import Home from "./pages/home.tsx";

export default function Fabulous() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="test" element={<Test message="Hello World ! " />} />
        </Route>
      </Routes>
    </Router>
  );
}