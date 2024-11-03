import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../assets/styles/Results.css";
import { fetchAntibodyData } from "../services/antibodyService"; 
import LoadingComponent from "../components/common/LoadingComponent.tsx";


export default function Results() {
const location = useLocation();
const { abSequence } = location.state || {};
const [abDict, setAbDict] = useState(null);
const [isLoading, setIsLoading] = useState(true); // Loader activé au départ

useEffect(() => {
    // Lance la requête une fois que le composant est monté
    async function loadData() {
        try {
            const data = await fetchAntibodyData(abSequence);
            setAbDict(data);
        } catch (error) {
            console.error("Erreur lors du chargement des données", error);
        } finally {
            setIsLoading(false); // Désactive le loader une fois les données chargées
        }
    }

    if (abSequence) {
        loadData();
    }
}, [abSequence]);

return (
    <div className="resultsContainer">
        
        {isLoading ? (
            <LoadingComponent />
        ) : (
            <>
                <h1>Results</h1>
                <p className="abSequence">Sequence: {abSequence}</p>
                {abDict && <pre>{JSON.stringify(abDict, null, 2)}</pre>}
            </>
        )}
    </div>
);
}