// This component is used to create the header and send it to the App.js 
import React from "react";
//importing the highlight icon as a component from material.ui
import HighlightIcon from '@mui/icons-material/Highlight';

function Header() {
  return (
    <header>
      <h1><HighlightIcon /> Keeper</h1>
    </header>
  );
}

export default Header;
