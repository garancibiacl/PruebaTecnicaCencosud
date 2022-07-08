import React from "react";
import TextField from "@mui/material/TextField";


const Search = () => {


  return (

      <div className="search">
        <TextField style={{'borderRadius':'50%'}}
          id="outlined-basic"
          variant="outlined"
  
         
          label="Buscar"
        />
      </div>

  );
}

export default Search;

