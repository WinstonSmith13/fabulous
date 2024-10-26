import { Stack } from "@mui/joy";
import Logo from "../components/Logo";
import SearchBox from "../components/Searchbox";
import Footer from "../components/layout/Footer.tsx";

export default function Home() {
    return (
      <>
        <Stack direction="column" alignItems="center">
          <Logo />
          <SearchBox />
        </Stack>
        {/* <Footer /> */}
      </>
    );
}