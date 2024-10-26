import { Stack } from "@mui/joy";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import { useState } from "react";
import SearchResults from "./searchResults/SearchResults";
import { fetchAntibodyData } from "../services/antibodyService"; // Import de la fonction de service


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
      <Stack direction="row" spacing={2} width={800}>
        <Select defaultValue="human" name="species">
          <Option value="human">Human</Option>
          <Option value="mouse">Mouse</Option>
          <Option value="monkey">Monkey</Option>
          <Option value="humanized">Humanized</Option>
        </Select>

        <Textarea
          name="sequence"
          value={abSequence}
          onChange={(e) => setAbSequence(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add one or multiple NT or AA sequence(s)"
          required
          sx={{ width: 600 }}
        />

        <Button color="primary" onClick={handleSearch}>
          Search
        </Button>
      </Stack>

      <p className="hint">
        <Button onClick={loadRandomSequence}>
          Don't have any antibody? Click here to load a dummy sequence
        </Button>
      </p>


      <SearchResults abSequence={abSequence} abDict={abDict} />
    </>
  );
}
