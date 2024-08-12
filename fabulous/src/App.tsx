import { Stack } from "@mui/joy";
import './assets/styles/index.css';  // Styles globaux
import './assets/styles/App.css';    // Styles spécifiques à l'application
import Logo from "./components/Logo";
import SearchBox from "./components/Searchbox";
import Footer from "./components/layout/Footer.tsx";

export default function Fabulous() {
  return (
    <>
         <Stack direction="column" alignItems="center">
        <Logo />
        <SearchBox />
      </Stack>
      <Footer />
    </>
  );
}
