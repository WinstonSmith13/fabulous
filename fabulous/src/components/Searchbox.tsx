
// import Select from "@mui/joy/Select";
// import Option from "@mui/joy/Option";
// import Button from "@mui/joy/Button";
// import Textarea from "@mui/joy/Textarea";
// import SearchResults from "./searchResults/SearchResults";
import ButtonComponent from "../components/common/ButtonComponent";
import { useState } from "react";
import { fetchAntibodyData } from "../services/antibodyService"; // Import de la fonction de service
import '../assets/styles/Searchbox.css';

export default function SearchBox() {
  const [abSequence, setAbSequence] = useState("");
  const [abDict, setAbDict] = useState(null);

  async function handleSearch(){
    try{
      const data = await fetchAntibodyData(abSequence);
      setAbDict(data);
    } catch(error){
      console.error("Error", error);
    }
  }

  function loadRandomSequence(){
console.log('test GCTGGGTTTTCCTTGTTGCTATTCTCGAGGGTGTCCAGTGTGAGGGCCAGCTGCTGGAGTCTGGAGGAGGACTTGCCCAGCCTGGAGGCTCTCTTAGGCTTAGCTGCACCGCTTCCGGCTTCACCTTCAGCAAGAACGCCATGAACTGGGTGAGGCAGGCCCCTGGAAAAAGGCTGGAGTGGGTGGCCGGCATCATTGGAAACGGCAGCGACACCTACTACGCCGACTCTGTGAAGGGCAGGTTCACCATCAGCAGGGACAACAGCAAGAATACCGTGAGCCTGCAGATGAACTCTCTGAGGGCTGAGGATTCTGCTATTTATTACTGTGCTAAAGACAGACATCCTTGGAGATGGCTGCAGCTTTTTGATAGCTGGGGCCAAGGCACCCTGGTTACAGTTTCTTCTGCTAGCACCAAGGGCCCATCGGTCTTCC');
setAbSequence("GCTGGGTTTTCCTTGTTGCTATTCTCGAGGGTGTCCAGTGTGAGGGCCAGCTGCTGGAGTCTGGAGGAGGACTTGCCCAGCCTGGAGGCTCTCTTAGGCTTAGCTGCACCGCTTCCGGCTTCACCTTCAGCAAGAACGCCATGAACTGGGTGAGGCAGGCCCCTGGAAAAAGGCTGGAGTGGGTGGCCGGCATCATTGGAAACGGCAGCGACACCTACTACGCCGACTCTGTGAAGGGCAGGTTCACCATCAGCAGGGACAACAGCAAGAATACCGTGAGCCTGCAGATGAACTCTCTGAGGGCTGAGGATTCTGCTATTTATTACTGTGCTAAAGACAGACATCCTTGGAGATGGCTGCAGCTTTTTGATAGCTGGGGCCAAGGCACCCTGGTTACAGTTTCTTCTGCTAGCACCAAGGGCCCATCGGTCTTCC")
}

  function handleKeyDown(e){
    if(e.keyCode===13){
      console.log('press');
      e.preventDefault();
      handleSearch();
    }
  }

  return (
    <>
    <div className="searchBoxContainer">
      <div className="searchBox">
      <form>
      <input 
          type="text" 
          name="sequence" 
          id="sequence" 
          placeholder="Type (or copy-paste) your nucleotide sequence(s) here" 
          required 
          onInput={handleSearch} 
          onKeyDown={handleKeyDown} // Notez la casse camel
          className="input_searchBox"
      />
        
        
    </form>
          {/* <Select defaultValue="human" name="species">
            <Option value="human">Human</Option>
            <Option value="mouse">Mouse</Option>
            <Option value="monkey">Monkey</Option>
            <Option value="humanized">Humanized</Option>
          </Select> */}

          {/* <Textarea
            name="sequence"
            value={abSequence}
            onChange={(e) => setAbSequence(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add one or multiple NT or AA sequence(s)"
            required
          /> */}
          <div className="bottom_searchBox">
            <select id="options" name="options">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>

            <ButtonComponent className="button_upload" value="Upload"/>
            <ButtonComponent className="button_search" value="Search" onClick={handleSearch}/>
          </div>


          {/* <Button color="primary" onClick={handleSearch}>
            Search
          </Button> */}

        {/* <p className="hint">
          <Button onClick={loadRandomSequence}>
            Don't have any antibody? Click here to load a dummy sequence
          </Button>
        </p> */}


        {/* <SearchResults abSequence={abSequence} abDict={abDict} /> */}
      </div>
    </div>
    </>
  );
}
