import SearchResults from "./searchResults/SearchResults";
import { Link } from "react-router-dom";
import ButtonComponent from "../components/common/ButtonComponent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAntibodyData } from "../services/antibodyService"; 
import '../assets/styles/Searchbox.css';

export default function SearchBox() {
  const navigate = useNavigate();
  const [abSequence, setAbSequence] = useState(""); 
  const [selectedOption, setSelectedOption] = useState("human");
  const [abDict, setAbDict] = useState(null);
  


  // async function handleSearch(){
  //   try{
  //     console.log('search');
  //     const data = await fetchAntibodyData(abSequence);
  //     setAbDict(data);
  //   } catch(error){
  //     console.error("Error", error);
  //   }
  // }
  async function handleSearch() {
      console.log('search');
      if (abSequence) {
        navigate("/results", { state: { abSequence } });
    }
  }

  function loadRandomSequence() {
    const randomSequence = "GCTGGGTTTTCCTTGTTGCTATTCTCGAGGGTGTCCAGTGTGAGGGCCAGCTGCTGGAGTCTGGAGGAGGACTTGCCCAGCCTGGAGGCTCTCTTAGGCTTAGCTGCACCGCTTCCGGCTTCACCTTCAGCAAGAACGCCATGAACTGGGTGAGGCAGGCCCCTGGAAAAAGGCTGGAGTGGGTGGCCGGCATCATTGGAAACGGCAGCGACACCTACTACGCCGACTCTGTGAAGGGCAGGTTCACCATCAGCAGGGACAACAGCAAGAATACCGTGAGCCTGCAGATGAACTCTCTGAGGGCTGAGGATTCTGCTATTTATTACTGTGCTAAAGACAGACATCCTTGGAGATGGCTGCAGCTTTTTGATAGCTGGGGCCAAGGCACCCTGGTTACAGTTTCTTCTGCTAGCACCAAGGGCCCATCGGTCTTCC";
    setAbSequence(randomSequence);
  }

  function handleKeyDown(e){
    if(e.keyCode===13){
      console.log('press');
      e.preventDefault();
      handleSearch();
    }
  }

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue); 
    console.log("Selected option:", selectedValue); 
  };

  return (
    <>
    <div>
      <div className="searchBoxContainer">
        <textarea
          name="sequence"
          id="sequence"
          value={abSequence}
          onChange={(e) => setAbSequence(e.target.value)}
          placeholder="Type (or copy-paste) your nucleotide sequence(s) here"
          required
          onKeyDown={handleKeyDown}
          className="input_searchBox"
          rows={5} // Ajustez le nombre de lignes selon vos besoins
        />
            <div className="bottom_searchBox">
              <select name="species" id="options" defaultValue="human" className="custom-select" onChange={handleSelectChange}>
                <option value="human">Human</option>
                <option value="mouse">Mouse</option>
                <option value="monkey">Monkey</option>
              </select>

              <div className="button_searchBox">
                <ButtonComponent className="button_upload" value="Upload" img_src="upload.png" img_className="img_upload_button"/>
                {/* <ButtonComponent className="button_search" value="Search" onClick={handleSearch} img_src="icons8-loupe.svg" img_className="img_search_button" /> */}
                <ButtonComponent onClick={handleSearch} className="button_search" value="Search" img_src="icons8-loupe.svg" img_className="img_search_button" />
                
                
              </div>
            </div>

          <SearchResults abSequence={abSequence} abDict={abDict} />
        
      </div>
      <ButtonComponent  onClick={loadRandomSequence} className="button_random" value="Don’t have an antibody? Add a fabulously crafted dummy sequence to try the tool out!"/>
    </div>
    </>
  );
}
