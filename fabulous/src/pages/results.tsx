import { useLocation } from "react-router-dom";
import "../assets/styles/Results.css";

export default function Results() {
    const location = useLocation();
    const { abSequence, abDict } = location.state || {}; // Récupérer les données passées
  
    return (
    <div className="containerResult">
      <div className="resultsContainer">
        <h1>Results</h1>
        <p className="abSequence">Sequence: {abSequence}</p>
        {abDict && <pre>{JSON.stringify(abDict, null, 2)}</pre>}
      </div>
    </div>
    );
  }