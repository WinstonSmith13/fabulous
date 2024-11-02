import SearchBox from "../components/Searchbox";
import "../assets/styles/Home.css";

export default function Home() {
    return (
        <div className="homeContainer">
            <p className="description_landing">All-in-one antibody tool, <br /> fabulously fast.</p>
            <SearchBox />
        </div>
    );
}